import Link from "next/link";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import List from "antd/lib/list";
import Image from "antd/lib/image";
import Text from "antd/lib/typography/Text";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { Fragment } from "react";
import uuid from "uuid/v4";

const slugify = require("@sindresorhus/slugify");

const ListPurchasedProductGLSingle=({product})=>{
console.log(product.result[1])
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
      
      return (
        <Fragment>

              <div className="col-5 mt-3 mr-5" key={uuid()}>
                <List.Item
                  className="purchased-product-card p-4 "
                  key={
                    product.data[0].description +
                    " | " +
                    product.data[0].collectionName
                  }
                >
                  <Row>
                    <Image
                      itemProp="image"
                      className="puchased-image"
                      alt={product.data[0].collectionName}
                      title={
                        product.data[0].collectionName +
                        " " +
                        product.data[0].article +
                        " by Sana'a Kayum"
                      }
                      src={
                        !(isSafari || isIE || isFirefox)
                          ? `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              product.data[0].images[0].fields.file.url}`
                          : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              product.data[0].images[0].fields.file.url}?fm=jpg`
                      }
                      placeholder={<Skeleton height={150} />}
                    />
                  </Row>
                  <Link
                    key={product.data[0].serialNumber}
                    href={{
                      pathname: `/product/[pid]/[slug]`,
                      query: {
                        pid: product.data[0].serialNumber,
                        slug: slugify(product.data[0].description)
                      }
                    }}
                  >
                    <List.Item.Meta
                      className="pt-2"
                      title={product.data[0].article}
                      description={product.data[0].description}
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
                                )}&s=${window.btoa(product.data[0].serialNumber)}`
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
          </Fragment>)
    }

    export default ListPurchasedProductGLSingle;