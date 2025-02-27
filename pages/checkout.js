import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";

import HeaderMeta from "../components/header/HeaderMeta";
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
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { Radio } from "antd";
import Spin from "antd/lib/spin";

const axios = require("axios").default;
const Checkout = ({ cartItems, currency, user }) => {
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  const [spin, setSpin] = useState(false);
  const [method, setMethod] = useState("ptb");
  const router = useRouter();
  var userData = user.user;

  let cartTotalPrice = 0;
  const options = [
    { label: "Secure Online Payment", value: "ptb" },
    { label: "Cash/Card on Delivery", value: "cod" }
  ];
  const makeCod = (userData, cartTotalPrice) => {
    const orderData = {
      tran_class: "cod",
      cart_amount: cartTotalPrice.toFixed(2),
      cart_currency: "AED",
      cart_description: "Order#" + uuid() + "SKCA",
      customer_details: {
        city: userData.addressDetails.region,
        customer_name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        phone: userData.mobile,
        state: userData.addressDetails.region,
        country: userData.addressDetails.country,
        street1: userData.addressDetails.addressLine
      },

      cartData: cartItems
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Token: userData?.entryID
    };

    axios
      .post("/api/cod", orderData, {
        headers: headers
      })
      .then(response => {
        const uID = response.headers.token;
        const date = new Date(response.headers.date);
        const offset = date.getTimezoneOffset() * 60 * 1000;
        const dubaiDate = new Date(date.getTime() - offset);
        Promise.resolve(
          localStorage.setItem("Initiate", JSON.stringify(response.data))
        ).then(() => {
          if (response.data.orderStatus === "placed")
            router.push(
              "/paybysk?pa=" +
                window.btoa(dubaiDate) +
                "&ui=" +
                window.btoa(uID)
            );
        });
      })
      .catch(error => {
        console.error(error);
      });
    
    
  };
  useEffect(() => {
    return () => {
      setSpin(false);
    };
  });
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
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/checkout`}
        color={"#000000"}
        headerTop="visible"
      >
        {/* breadcrumb */}

        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-6">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input
                            type="text"
                            defaultValue={userData?.firstName}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input
                            type="text"
                            defaultValue={userData?.lastName}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Country</label>
                          {userData?.addressDetails ? (
                            <>
                              <input
                                type="text"
                                defaultValue={userData?.addressDetails.country}
                              />
                              <input
                                type="text"
                                defaultValue={userData?.addressDetails.region}
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
                          defaultValue={
                            userData && userData?.addressDetails?.addressLine
                          }
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input type="text" name="postcode" />
                      </div>
                    </div>

                    <div className="col">
                      <div className="billing-info mb-20">
                        <label>Phone</label>
                        <input
                          name="phone"
                          type="text"
                          defaultValue={
                            userData?.mobile ? userData?.mobile : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="billing-info mb-20">
                        <label>Email Address</label>
                        <input
                          type="text"
                          defaultValue={userData?.email ? userData?.email : ""}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="additional-info-wrap">
                    <h4>Additional information</h4>
                    <div className="additional-info">
                      <label>Order notes</label>
                      <textarea
                        placeholder="Notes about your order, e.g. special notes for delivery. "
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                  </div> */}
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
                      <div className="payment-method p-2">
                        <Container>
                          <h4>Choose your preferred payment method</h4>
                          <Radio.Group
                            options={options}
                            defaultValue="ptb"
                            onChange={e => setMethod(e.target.value)}
                          />
                        </Container>
                        {method == "ptb" ? (
                          <div className="place-order mt-25">
                            <button
                              className="btn-hover"
                              onClick={() => {
                                setSpin(true);
                                const headers = {
                                  "Access-Control-Allow-Headers":
                                    "Content-Type, Authorization",
                                  Authorization: process.env.NEXT_PUBLIC_SVK,
                                  "Access-Control-Allow-Origin": "*",
                                  "Content-Type": "application/json",
                                  Token: userData?.entryID
                                };

                                axios
                                  .post(
                                    "/api/pay",
                                    {
                                      profile_id: process.env.NEXT_PUBLIC_MID,
                                      tran_type: "sale",
                                      tran_class: "ecom",
                                      cart_description:
                                        "Order#" + uuid() + "SKCA",
                                      cart_id: uuid(),
                                      cart_currency: currency.currencySymbol,
                                      cart_amount: cartTotalPrice.toFixed(2),
                                      callback: `${process.env.NEXT_PUBLIC_DOMAIN}/api/response`,
                                      return: `${process.env.NEXT_PUBLIC_DOMAIN}/api/response`,
                                      customer_details: {
                                        name:
                                          userData?.firstName +
                                          " " +
                                          userData?.lastName,
                                        email: userData?.email,
                                        phone: userData?.mobile
                                          ? userData?.mobile
                                          : document.querySelector(
                                              "input [name='phone']"
                                            ).value,
                                        street1:
                                          userData &&
                                          userData?.addressDetails?.addressLine.concat(
                                            ", P.O.Box : " +
                                              document.querySelector(
                                                'input[name="postcode"]'
                                              )
                                              ? document.querySelector(
                                                  'input[name="postcode"]'
                                                ).value
                                              : ""
                                          ),
                                        city: userData?.addressDetails.region,
                                        state: userData?.addressDetails.region,
                                        country:
                                          userData?.addressDetails.country,
                                        ip: ""
                                      },
                                      framed: true,
                                      hide_shipping: true
                                    },
                                    {
                                      headers: headers
                                    }
                                  )
                                  .then(response => {
                                    Promise.resolve(
                                      localStorage.setItem(
                                        "Initiate",
                                        JSON.stringify(response.data)
                                      )
                                    ).then(() => {
                                      router.push(response.data.redirect_url);
                                    });
                                  })
                                  .catch(error => {
                                    console.error(error);
                                  });
                              }}
                            >
                              Place Order{" "}
                              {!spin ? (
                                <i className="fa fa-credit-card"></i>
                              ) : (
                                <Spin />
                              )}
                            </button>
                          </div>
                        ) : (
                          <div className="place-order mt-25">
                            <button
                              className="btn-hover"
                              onClick={e => {
                                setSpin(true);
                                e.preventDefault();
                                makeCod(userData, cartTotalPrice);
                              }}
                            >
                              Deliver to this Address
                              {!spin ? (
                                <i className="fa fa-truck"></i>
                              ) : (
                                <Spin />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
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

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
    user: state.userData
  };
};

export default connect(mapStateToProps)(Checkout);
