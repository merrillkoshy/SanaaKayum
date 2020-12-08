import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import  Link  from "next/link";
import HeaderMeta from "../components/header/HeaderMeta";
import { useToasts } from "react-toast-notifications";

import { connect } from "react-redux";
import { getDiscountPrice } from "../helpers/product";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  cartItemStock,
  deleteAllFromCart
} from "../redux/actions/cartActions";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
const slugify = require("@sindresorhus/slugify");


const Cart = ({
  
  cartItems,
  currency,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
  user
}) => {
  const [quantityCount] = useState(1);
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  const { addToast } = useToasts();
  
  let cartTotalPrice = 0;


  
  

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
      url={"https://sanaakayum.com/cart"}
      color={"#000000"}
      headerTop="visible"
    >
        {/* breadcrumb */}
       
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = (
                              cartItem.price * currency.currencyRate
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice * currency.currencyRate
                            ).toFixed(2);

                            discountedPrice != null
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    href={`${
                                      process.env.NEXT_PUBLIC_DOMAIN
                                    }/product/${cartItem.serialNumber}/${slugify(
                                      cartItem.description
                                    )}`}
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        !(isSafari || isIE || isFirefox)
                                          ? 
                                            cartItem.images[0].fields.file.url
                                          : `${
                                              cartItem.images[0].fields.file
                                                .url}?fm=jpg`
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    href={`${
                                      process.env.NEXT_PUBLIC_DOMAIN
                                    }/product/${cartItem.serialNumber}/${slugify(
                                      cartItem.description
                                    )}`}
                                  >
                                    {cartItem.collectionName}
                                  </Link>
                                    <div className="cart-item-variation">
                                      {cartItem.description}
                                    </div>
                                  {cartItem.selectedProductColor &&
                                  cartItem.selectedProductSize ? (
                                    <div className="cart-item-variation">
                                      <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span>
                                      <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </td>

                                <td className="product-price-cart">
                                  {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className="amount old">
                                        {/* {currency.currencySymbol +
                                          finalProductPrice} */}
                                        {`AED ` + finalProductPrice}
                                      </span>
                                      <span className="amount">
                                        {/* {currency.currencySymbol +
                                          finalDiscountedPrice} */}
                                        {`AED ` + finalDiscountedPrice}
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className="amount">
                                      {/* {currency.currencySymbol +
                                        finalProductPrice} */}
                                      {`AED ` + finalProductPrice}
                                    </span>
                                  )}
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        decreaseQuantity(
                                          cartItem,
                                          addToast,
                                          user.user.entryID
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        setTimeout(() => {
                                          
                                          addToCart(
                                            cartItem,
                                            addToast,
                                            user.user.entryID,
                                            quantityCount
                                          )
                                        }, 1000)
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity &&
                                        cartItem.quantity >=
                                          cartItemStock(
                                            cartItem,
                                            cartItem.selectedProductColor,
                                            cartItem.selectedProductSize
                                          )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  {discountedPrice !== null
                                    ? currency.currencySymbol +
                                      (
                                        finalDiscountedPrice * cartItem.quantity
                                      ).toFixed(2)
                                    : currency.currencySymbol +
                                      (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2)}
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      deleteFromCart(
                                        cartItem,
                                        addToast,
                                        user.user.entryID
                                      )
                                    }
                                  >
                                    <i className="fa fa-times"></i>
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
                            deleteAllFromCart(addToast, user.user.entryID)
                          }
                        >
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Estimate Shipping And Tax
                        </h4>
                      </div>
                      <div className="tax-wrapper">
                        <p>
                          Enter your destination to get a shipping estimate.
                        </p>
                        <div className="tax-select-wrapper">
                          <div className="tax-select">
                            <label>* Country</label>
                            <CountryDropdown
                              value={country}
                              onChange={val => selectCountry(val)}
                            />
                            <RegionDropdown
                              country={country}
                              value={region}
                              onChange={val => selectRegion(val)}
                            />
                          </div>
                          <div className="tax-select">
                            <label>* Zip/Postal Code</label>
                            <input type="text" />
                          </div>
                          <button className="cart-btn-2" type="submit">
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray">
                          Use Coupon Code
                        </h4>
                      </div>
                      <div className="discount-code">
                        <p>Enter your coupon code if you have one.</p>
                        <form>
                          <input type="text" required name="name" />
                          <button className="cart-btn-2" type="submit">
                            Apply Coupon
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products{" "}
                        <span>{`AED ` + cartTotalPrice.toFixed(2)}</span>
                      </h5>
                      <h4 className="grand-totall-title">
                        Grand Total{" "}
                        <span>{`AED ` + cartTotalPrice.toFixed(2)}</span>
                      </h4>
                      <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/checkout"}>
                      <a>{`Proceed to Checkout`}</a>
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className={cartItems?`${"table-content table-responsive cart-table-content"}`:`${"item-empty-area text-center"}`}>
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart <br />{" "}
                      <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
                        <a>Shop Now</a>
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

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.userData,
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, uID, quantityCount) => {
      dispatch(addToCart(item, addToast, uID, quantityCount));
    },
    decreaseQuantity: (item, addToast, uID) => {
      dispatch(decreaseQuantity(item, addToast, uID));
    },
    deleteFromCart: (item, addToast, uID) => {
      dispatch(deleteFromCart(item, addToast, uID));
    },
    deleteAllFromCart: (addToast, uID) => {
      dispatch(deleteAllFromCart(addToast, uID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
