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
import { Button } from "react-bootstrap";
import ListPurchasedProductGLSingle from "../../components/product/ListPurchasedProductGLSingle";

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
  const router = useRouter();
  const calculateSevenDays = date => {
    const receivedDate=new Date(date).setDate(new Date(date).getDate()+7)
    return new Date(receivedDate);
  };
  
  const ifEligible = (date1, date2) => {
    if (date1 - date2 > 0) return false;
    return true;
  };
  
  return (
    <Fragment>
      {products.map(product => {
        return product.data ? 
        <ListPurchasedProductGLSingle
        product={product}
        />
 
          :
          <>
          
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
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              entryID={userData.user.entryID}
              loginUser={loginUser}
            />
            
          </Link>
          
          </>
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
