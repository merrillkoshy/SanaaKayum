import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { addToCart,loadCart } from "../../redux/actions/cartActions";
import { addToWishlist,loadWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare,loadCompare } from "../../redux/actions/compareActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import Link from "next/link";


const slugify = require("@sindresorhus/slugify");

const ProductGrid = ({
  userData,
  products,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
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
              addToCompare={addToCompare}
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
              compareItem={
                compareItems.filter(
                  compareItem => compareItem.id === product.serialNumber
                )[0]
              }
              loadCart={loadCart}
                loadCompare={loadCompare}
                loadWishlist={loadWishlist}
                loginUser={loginUser}
            />
          </Link>
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
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
    compareItems: state.compareData,
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
    loadCompare: item => {
      dispatch(loadCompare(item));
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
    },
    addToCompare: (item, addToast, uID) => {
      dispatch(addToCompare(item, addToast, uID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
