import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import uuid from "uuid/v4";
import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import List from "antd/lib/list";
import Image from "antd/lib/image";
import Text from "antd/lib/typography/Text";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";

import { useRouter } from "next/router";
import { Button, Carousel } from "react-bootstrap";
import ListPurchasedProductGLSingle from "../../components/product/ListPurchasedProductGLSingle";
import Slider from "react-slick";

const slugify = require("@sindresorhus/slugify");

const PurchasedProductGrid = ({
  userData,
  products,
  currency,
  columnClass,
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
      {products &&
        products.map(product => {
          return product.data ? (
            <Row className="orders-wrapper mb-5" key={uuid()}>
              <div className="text-right font-weight-bold pr-3 pt-2 title-card">
                <div className="text-left pl-3" style={{ fontSize: "10px" }}>
                  {product.cart_id}
                </div>
                {`  `}
                {product.result[0] === "A" ||
                product.result[0] === "Order Placed"
                  ? `Ordered On : `
                  : `Attempted On : `}
                {product.result[1].getDate()}
                {` `}
                {monthNames[product.result[1].getMonth()]}
                {` `}
                {product.result[1].getFullYear()}
              </div>
              <Row className="orders-container">
                <ListPurchasedProductGLSingle product={product} />
              </Row>
            </Row>
          ) : (
            <>
              <Skeleton height={150} />
              {setTimeout(() => {
                return (
                  products &&
                  products.map(product => {
                  <Row className="orders-wrapper mb-5" key={uuid()}>
                    <div className="text-right font-weight-bold pr-3 pt-2 title-card">
                      <div
                        className="text-left pl-3"
                        style={{ fontSize: "10px" }}
                      >
                        {product.cart_id}
                      </div>
                      {`  `}
                      {product.result[0] === "A" ||
                      product.result[0] === "Order Placed"
                        ? `Ordered On : `
                        : `Attempted On : `}
                      {product.result[1].getDate()}
                      {` `}
                      {monthNames[product.result[1].getMonth()]}
                      {` `}
                      {product.result[1].getFullYear()}
                    </div>
                    <Row className="orders-container">
                      <ListPurchasedProductGLSingle product={product} />
                    </Row>
                  </Row>
                  })
                )
              }, 500)}
            </>
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
