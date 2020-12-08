import Link from "next/link";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import List from "antd/lib/list";
import Image from "antd/lib/image";
import Text from "antd/lib/typography/Text";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox, isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { Fragment, useState, useRef, useEffect } from "react";
import uuid from "uuid/v4";
import OwlCarousel from "react-owl-carousel3";


const slugify = require("@sindresorhus/slugify");

const ListPurchasedProductGLSingle=({product})=>{
  
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const router = useRouter();
      const calculateSevenDays = date => {
        const receivedDate=new Date(date).setDate(new Date(date).getDate()+7)
        return new Date(receivedDate);
      };
      
      const ifEligible = (date1, date2) => {
        if (date2 - date1 > 0) return false;
        return true;
      };
      const [pr,setProduct]=useState("")
      const [display, setDisplay] = useState(false);

      useEffect(()=>{
    setDisplay(true)
        setProduct(product)
      },[product])
      const options = {
        
        nav: true,
        dots:false,
        responsiveClass: true,
        mouseDrag: true,
        navText: [
          "<i class='pe-7s-angle-left'></i>",
          "<i class='pe-7s-angle-right'></i>"
        ]
      };
      return (
        <Fragment>

{display?<OwlCarousel items={ isMobile?1:2} {...options} className="owl-theme" nav>
                { pr.data && pr.data.map(datum=>{
                  return( 
                    
                <div className="col" key={uuid()}>
                 
                 <List.Item
                  className="purchased-product-card p-4 "
                  key={
                    datum.description +
                    " | " +
                    datum.collectionName
                  }
                >
                  <Row>
                    <Image
                      itemProp="image"
                      className="puchased-image"
                      alt={datum.collectionName}
                      title={
                        datum.collectionName +
                        " " +
                        datum.article +
                        " by Sana'a Kayum"
                      }
                      src={
                        !(isSafari || isIE || isFirefox)
                          ? `${
                              datum.images[0].fields.file.url}`
                          : `${
                              datum.images[0].fields.file.url}?fm=jpg`
                      }
                      placeholder={<Skeleton height={150} />}
                    />
                  </Row>
                  <Link
                    key={datum.serialNumber}
                    href={{
                      pathname: `/product/[pid]/[slug]`,
                      query: {
                        pid: datum.serialNumber,
                        slug: slugify(datum.description)
                      }
                    }}
                  >
                    <List.Item.Meta
                      className="pt-2"
                      title={datum.article}
                      description={datum.description}
                    />
                  </Link>
                  <Row>
                    {(product.result[0] === "A" || product.result[0] === "Order Placed")? (
                      <>
                        <Col>
                          <Text strong> Ordered on:</Text>
                        </Col>
                        <Col>
                          {product.result[1].getDate() +
                            " " +
                            monthNames[product.result[1].getMonth()] +
                            " " +
                            product.result[1].getFullYear()}
                        </Col>
                        <Col>
                          <Text strong> Free Cancellation/ Return till </Text>
                        </Col>
                        <Col>
                        {calculateSevenDays(
                            product.result[1]
                          ).getDate()}
                          {
                            " " +
                            monthNames[
                              calculateSevenDays(
                                product.result[1]
                              ).getMonth()
                            ] +
                            " " +
                            calculateSevenDays(
                              product.result[1]
                            ).getFullYear()}
                        </Col>
                        {ifEligible(
                          new Date(),
                          calculateSevenDays(product.result[1].getDate())
                        ) ? (
                          
                          <Button
                            onClick={e => {
                              e.preventDefault();
                              router.push(
                                `/customer-care/refund?t=${window.btoa(
                                  product.ref
                                )}&s=${window.btoa(datum.serialNumber)}`
                              );
                            }}
                            variant="danger"
                          >
                            Refund
                          </Button>
                        ) : (
                          <Button style={{cursor:"not-allowed"}}disabled>Expired</Button>
                        )}
                      </>
                    ) : (
                      <>
                        <Col>
                          <Text type="danger"> Attempted on:</Text>
                        </Col>
                        <Col>
                          {product.result[1].getDate() +
                            " " +
                            monthNames[product.result[1].getMonth()] +
                            " " +
                            product.result[1].getFullYear()}
                        </Col>
                      </>
                    )}
                  </Row>
                </List.Item>
              </div>
              
                )
                })}
                </OwlCarousel>
                :<Skeleton height={150} />}


          </Fragment>)
    }

    export default ListPurchasedProductGLSingle;