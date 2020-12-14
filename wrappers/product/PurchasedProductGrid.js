import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import uuid from "uuid/v4";
import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";
import Row from "antd/lib/row";

import OwlCarousel from "react-owl-carousel3";
import ListPurchasedProductGLSingle from "../../components/product/ListPurchasedProductGLSingle";
import { isMobile, isTablet } from "react-device-detect";
import Skeleton from "react-loading-skeleton";

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
  const options = {
    nav: true,
    dots: false,
    center: false,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      330: {
        items: 2
      },
      460: {
        items: 3
      },
      600: {
        items: 4
      },
      850: {
        items: 5
      },
      1000: {
        items: 6
      },
      1200: {
        items: 7
      },
      1300: {
        items: 8
      },
      1600: {
        items: 8
      }
    },
    mouseDrag: true,
    navText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
    ]
  };
  const optionsPay = {
    nav: true,
    items: 2,
    dots: false,
    center: false,
    touchDrag: true,
    responsiveClass: true,
    mouseDrag: true,
    navText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
    ]
  };
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  });
  return (
    <Fragment>
      {products &&
        products.map(product => {
          return product.data ? (
            display ? (
              // <OwlCarousel {...optionsPay} className="owl-theme" nav>
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
              /* </OwlCarousel> */
            ) : (
              <Skeleton height={150} />
            )
          ) : display ? (
            <OwlCarousel {...optionsPay} className="owl-theme" nav>
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
                  columnClass={columnClass}
                  sliderClassName={sliderClassName}
                  spaceBottomClass={spaceBottomClass}
                  product={product}
                  currency={currency}
                  entryID={userData.user.entryID}
                  loginUser={loginUser}
                />
              </Link>
            </OwlCarousel>
          ) : (
            <>
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
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
