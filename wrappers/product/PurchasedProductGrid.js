import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { addToCart, loadCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  loadWishlist
} from "../../redux/actions/wishlistActions";

import PurchasedProductGridListSingle from "../../components/product/PurchasedProductGridListSingle";
import Link from "next/link";

const slugify = require("@sindresorhus/slugify");

const PurchasedProductGrid = ({
  userData,
  products,
  currency,
  addToCart,
  addToWishlist,

  cartItems,
  wishlistItems,

  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      {products.map(product => {
        return (
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

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userDetails, addToast, entryID) => {
      dispatch(loginUser(userDetails, addToast, entryID));
    },
    loadCart: item => {
      dispatch(loadCart(item));
    },

    loadWishlist: item => {
      dispatch(loadWishlist(item));
    },
    addToCart: (
      item,
      addToast,
      uID,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          uID,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast, entryID) => {
      dispatch(addToWishlist(item, addToast, entryID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchasedProductGrid);
