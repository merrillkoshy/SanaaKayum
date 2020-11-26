import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";
import { Row, Col, List, Image } from "antd";
import Text from "antd/lib/typography/Text";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";

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
  return (
    <Fragment>
      {products.map(product => {
        return product.data ? (
          <>
            <Link
              key={product.data[0].serialNumber}
              href={{
                pathname: `/product/[pid]/[slug]`,
                query: {
                  pid: product.data[0].serialNumber,
                  slug: slugify(product.data[0].description)
                }
              }}
              passHref
            >
              <List.Item
                key={product.data[0].description +" | "+product.data[0].collectionName}
                extra={
                  <Image
                    width={"100%"}
                    className="default-img"
                    itemProp="image"
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
                              .url}?w=220&h=300&f=center&fit=pad`
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.data[0].images[0].fields.file
                              .url}?fm=jpg&w=220&h=300&f=center&fit=pad`
                    }
                    placeholder={<Skeleton height={150} />}
                  />
                }
              >
                <List.Item.Meta
                  title={product.data[0].article}
                  description={product.data[0].description}
                />
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
            </Link>
           
          </>
        ) : (
          <Link
            key={product.serialNumber}
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
