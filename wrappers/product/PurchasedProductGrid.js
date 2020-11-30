import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import List from "antd/lib/list";
import Image from "antd/lib/image";
import Text from "antd/lib/typography/Text";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Button from "antd/lib/button";
import { useRouter } from "next/router";

const slugify = require("@sindresorhus/slugify");

const PurchasedProductGrid = ({
  userData,
  products,
  currency,

  sliderClassName,
  spaceBottomClass
}) => {
  
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
  const router=useRouter()
  const calculateSevenDays=date=>{
    const finalDate=new Date().setDate(date + 7)
    return new Date(finalDate)
  }
  const ifEligible=(date1,date2)=>{
    
    if(date1-date2>0) return false
    return true
  }
  return (
    <Fragment>
      
      {products.map(product => {
        return product.data ? (
          <div className="col">
              <List.Item
              className="purchased-product-card p-4 mx-auto"
                key={product.data[0].description +" | "+product.data[0].collectionName}
               
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
                            product.data[0].images[0].fields.file
                              .url}`
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.data[0].images[0].fields.file
                              .url}?fm=jpg`
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
                  {product.result[0] === "A" ? (
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
                        {calculateSevenDays(product.result[1].getDate()).getDate()+
                         " " +
                         monthNames[calculateSevenDays(product.result[1].getDate()).getMonth()] +
                         " " +
                         calculateSevenDays(product.result[1].getDate()).getFullYear()}
                        
                      </Col>
                      {
                        ifEligible(new Date(),calculateSevenDays(product.result[1].getDate()))?<Button onClick={e=>{
e.preventDefault();

router.push(`/customer-care/refund?t=${cryptr.encrypt(product.ref)}`)

                        }}>Cancel</Button>:<Button onClick={e=>{
                          e.preventDefault();
                          
                          // console.log(cryptr.encrypt(product.ref))
                          router.push(`/customer-care/refund?t=${window.btoa(product.ref)}&s=${window.btoa(product.data[0].serialNumber)}`)
                                                  }}>Cancel</Button>
                      }
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

              {/* <PurchasedProductGridListSingle
                sliderClassName={sliderClassName}
                spaceBottomClass={spaceBottomClass}
                product={product.data[0]}
                currency={currency}
                entryID={userData.user.entryID}
                loginUser={loginUser}
              /> */}
            
           
          </div>
        ) : (
          <Link
            
            href={{
              pathname: `/product/[pid]/[slug]`,
              query: {
                pid: product.serialNumber,
                slug: slugify(product.description)
              }
            }}
            passHref
          >
            <PurchasedProductGridListSingle
              sliderClassName={sliderClassName}
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              entryID={userData.user.entryID}
              loginUser={loginUser}
            />
          </Link>
        );
      })}
      
    </Fragment>
  );
};

PurchasedProductGrid.propTypes = {
  addToCart: PropTypes.func,

  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,

  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,

    userData: state.userData
  };
};

export default connect(mapStateToProps, null)(PurchasedProductGrid);
