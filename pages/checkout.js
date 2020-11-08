import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import  Link  from "next/link";

import MetaTags from "react-meta-tags";
import { connect } from "react-redux";

import { getDiscountPrice } from "../helpers/product";
import LayoutOne from "../layouts/LayoutOne";


import uuid from "uuid/v4";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
import clientMgr from "../constants/contentManager";
import { document } from "ssr-window";

const axios = require("axios").default;
const Checkout = ({ cartItems, currency, user }) => {
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  
  var userData = user.user;

  let cartTotalPrice = 0;
  const order = response => {
    var orderData = {
      cart_amount: 0,
      cart_currency: "",
      cart_description: "",
      cart_id: "",
      customer_details: "",
      tran_ref: "",
      tran_type: "",
      date: ""
    };
    orderData.redirect_url = response.data.redirect_url;
    orderData.cart_amount = response.data.cart_amount;
    orderData.cart_currency = response.data.cart_currency;
    orderData.cart_description = response.data.cart_description;
    orderData.cartItems = cartItems;
    orderData.cart_id = response.data.cart_id;
    orderData.customer_details = response.data.customer_details;
    orderData.tran_ref = response.data.tran_ref;
    orderData.tran_type = response.data.tran_type;
    orderData.date = response.headers.date;
    clientMgr
      .then(environment => environment.getEntry(userData && userData.entryID))
      .then(entry => {
        if (entry.fields["orderData"] === undefined)
          entry.fields["orderData"] = { "en-US": [orderData] };
        else entry.fields["orderData"]["en-US"].push(orderData);

        return entry.update();
      })
      .then(entry => entry.publish())
      .then(entry => {
        console.log(entry);
        return entry;
      })
      .finally(entry => {
        if (entry) window.location.replace(response.data.redirect_url);
        else
          setTimeout(() => {
            window.location.replace(response.data.redirect_url);
          }, 1000);
      });
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Haute Couture & High-Street Fashion - Sana'a Kayum</title>
        <meta
          name="description"
          content="Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        />
      </MetaTags>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input
                            type="text"
                            defaultValue={userData && userData && userData.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input type="text" defaultValue={userData && userData.lastName} />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Country</label>
                          {userData && userData.addressDetails ? (
                            <>
                              <input
                                type="text"
                                defaultValue={userData && userData.addressDetails.country}
                              />
                              <input
                                type="text"
                                defaultValue={userData && userData.addressDetails.region}
                              />
                            </>
                          ) : (
                            <>
                              <CountryDropdown
                                value={country}
                                onChange={val => selectCountry(val)}
                              />
                              <RegionDropdown
                                country={country}
                                value={region}
                                onChange={val => selectRegion(val)}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="billing-info mb-20">
                        <label>Street Address</label>
                        <input
                          className="billing-address"
                          placeholder="House number and street name"
                          type="text"
                          defaultValue={userData && userData.addressDetails.addressLine}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input type="text" name="postcode" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Phone</label>
                        <input
                          name="phone"
                          type="text"
                          defaultValue={userData && userData.mobile ? userData && userData.mobile : ""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info mb-20">
                        <label>Email Address</label>
                        <input
                          type="text"
                          defaultValue={userData && userData.email ? userData && userData.email : ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="additional-info-wrap">
                    <h4>Additional information</h4>
                    <div className="additional-info">
                      <label>Order notes</label>
                      <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
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
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.description} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button
                        className="btn-hover"
                        onClick={() => {
                          axios.defaults.xsrfCookieName = "csrftoken";
                          axios.defaults.xsrfHeaderName = "X-CSRFToken";
                          axios
                            .post(
                              process.env.NEXT_PUBLIC_ENDPOINT,
                              {
                                profile_id: process.env.NEXT_PUBLIC_MID,
                                tran_type: "sale",
                                tran_class: "ecom",
                                cart_description: "Order#" + uuid() + "SKCA",
                                cart_id: uuid(),
                                cart_currency: currency.currencySymbol,
                                cart_amount: cartTotalPrice.toFixed(2),
                                callback: "http://localhost:3000/cart",
                                return: "http://localhost:3000/cart",
                                customer_details: {
                                  name:
                                    userData && userData.firstName +
                                    " " +
                                    userData && userData.lastName,
                                  email: userData && userData.email,
                                  phone: userData && userData.mobile
                                    ? () => userData && userData.mobile
                                    : document.querySelector(
                                        "input [name='phone']"
                                      )
                                    ? document.querySelector(
                                        "input [name='phone']"
                                      ).value
                                    : "",
                                  street1: userData && userData.addressDetails.addressLine.concat(
                                    ", P.O.Box : " +
                                      document.querySelector(
                                        'input[name="postcode"]'
                                      )
                                      ? document.querySelector(
                                          'input[name="postcode"]'
                                        ).value
                                      : ""
                                  ),
                                  city: userData && userData.addressDetails.region,
                                  state: userData && userData.addressDetails.region,
                                  country: userData && userData.addressDetails.country,
                                  ip: ""
                                },
                                framed: true,
                                hide_shipping: true
                              },
                              {
                                headers: {
                                  "content-type": "application/json",
                                  accept: "application/json",
                                  authorization: process.env.NEXT_PUBLIC_SVK
                                }
                              }
                            )
                            .then(
                              response => {
                                order(response);
                                console.log(response);
                              },
                              error => {
                                console.log(error);
                              }
                            );
                        }}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}>
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

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
    user: state.userData
  };
};

export default connect(mapStateToProps)(Checkout);
