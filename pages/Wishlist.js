import PropTypes from "prop-types";
import React, { Fragment } from "react";
import  Link  from "next/link";

import { useToasts } from "react-toast-notifications";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../helpers/product";
import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist
} from "../redux/actions/wishlistActions";
import { addToCart } from "../redux/actions/cartActions";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { isSafari, isIE, isFirefox } from "react-device-detect";
const slugify = require("@sindresorhus/slugify");
import HeaderMeta from "../components/header/HeaderMeta";
const Wishlist = ({
  userData,
  
  cartItems,
  currency,
  addToCart,
  wishlistItems,
  deleteFromWishlist,
  deleteAllFromWishlist
}) => {
  const { addToast } = useToasts();
 

  return (
    <Fragment>
      <LayoutOne
      article={"Exquisite Wardrobe"}
      title={"Haute Couture & High-Street Fashion"}
      description={
        "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
      }
      image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={"https://sanaakayum.com/wishlist"}
      color={"#000000"}
      headerTop="visible"
      headerContainerClass="container-fluid"
      headerPaddingClass="header-padding-2"
    >
        {/* breadcrumb */}

        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {wishlistItems && wishlistItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your wishlist items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Item</th>
                            <th>Unit Price</th>
                            <th>Add To Cart</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlistItems.map((wishlistItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              wishlistItem.price,
                              wishlistItem.discount
                            );
                            const finalProductPrice = (
                              wishlistItem.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);
                            const cartItem = cartItems.filter(
                              item =>
                                item.serialNumber === wishlistItem.serialNumber
                            )[0];
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    href={`${
                                      process.env.NEXT_PUBLIC_DOMAIN
                                    }/product/${slugify(
                                      wishlistItem.description
                                    )}`}
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        !(isSafari || isIE || isFirefox)
                                          ? 
                                            wishlistItem.images[0].fields.file
                                              .url
                                          : `${
                                              wishlistItem.images[0].fields.file
                                                .url}?fm=jpg`
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link
                                    href={`${
                                      process.env.NEXT_PUBLIC_DOMAIN
                                    }/product/${slugify(
                                      wishlistItem.description
                                    )}`}
                                  >
                                    <a>{wishlistItem.description}</a>
                                  </Link>
                                </td>

                                <td className="product-price-cart">
                                  {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {currency.currencySymbol +
                                          finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {currency.currencySymbol +
                                          finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {currency.currencySymbol +
                                        finalProductPrice}
                                    </span>
                                  )}
                                </td>

                                <td className="product-wishlist-cart">
                                  {wishlistItem.affiliateLink ? (
                                    <a
                                      href={wishlistItem.affiliateLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {" "}
                                      Buy now{" "}
                                    </a>
                                  ) : wishlistItem.variation &&
                                    wishlistItem.variation.length >= 1 ? (
                                    <Link
                                      href={`${
                                        process.env.NEXT_PUBLIC_DOMAIN
                                      }/product/${slugify(
                                        wishlistItem.description
                                      )}`}
                                    >
                                      <a>{`Select option`}</a>
                                      
                                    </Link>
                                  ) : wishlistItem.stock &&
                                    wishlistItem.stock > 0 ? (
                                    <button
                                      onClick={() =>
                                        setTimeout(() => {
                                          
                                          addToCart(
                                            wishlistItem,
                                            addToast,
                                            userData.user.entryID
                                          )
                                        }, 1000)
                                      }
                                      className={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                          ? "active"
                                          : ""
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity > 0
                                      }
                                      title={
                                        wishlistItem !== undefined
                                          ? "Added to cart"
                                          : "Add to cart"
                                      }
                                    >
                                      {cartItem !== undefined &&
                                      cartItem.quantity > 0
                                        ? "Added"
                                        : "Add to cart"}
                                    </button>
                                  ) : (
                                    <button disabled className="active">
                                      Out of stock
                                    </button>
                                  )}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      deleteFromWishlist(
                                        wishlistItem,
                                        addToast,
                                        userData.user.entryID
                                      )
                                    }
                                  >
                                    <i className="pe-7s-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
                        <a>{`Continue Shopping`}</a>
                          
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button
                          onClick={() =>
                            deleteAllFromWishlist(
                              addToast,
                              userData.user.entryID
                            )
                          }
                        >
                          Clear Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                <div className={wishlistItems?`${"table-content table-responsive cart-table-content"}`:`${"item-empty-area text-center"}`}>
                  
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in wishlist <br />{" "}
                      <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
                        <a>{`Add Items`}</a>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Wishlist.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, uID, quantityCount) => {
      dispatch(addToCart(item, addToast, uID, quantityCount));
    },
    addToWishlist: (item, addToast, uID, quantityCount) => {
      dispatch(addToWishlist(item, addToast, uID, quantityCount));
    },
    deleteFromWishlist: (item, addToast, uID, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, uID, quantityCount));
    },
    deleteAllFromWishlist: (addToast, uID) => {
      dispatch(deleteAllFromWishlist(addToast, uID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
