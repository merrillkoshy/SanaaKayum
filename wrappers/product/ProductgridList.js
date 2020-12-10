import PropTypes from "prop-types";
import React, { Fragment, useEffect,useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { addToCart, loadCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  loadWishlist
} from "../../redux/actions/wishlistActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import Link from "next/link";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

const slugify = require("@sindresorhus/slugify");

const ProductGrid = ({
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
              <ProductGridListSingle
                sliderClassName={sliderClassName}
                spaceBottomClass={spaceBottomClass}
                product={product}
                currency={currency}
                addToCart={addToCart}
                entryID={userData.user.entryID}
                addToWishlist={addToWishlist}
                cartItem={
                  cartItems &&
                  cartItems.filter(
                    cartItem => cartItem.id === product.serialNumber
                  )[0]
                }
                wishlistItem={
                  wishlistItems.filter(
                    wishlistItem => wishlistItem.id === product.serialNumber
                  )[0]
                }
                
              />
            </Link>
          );
        })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
