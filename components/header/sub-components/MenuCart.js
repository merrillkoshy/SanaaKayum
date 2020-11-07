import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { useToasts } from "react-toast-notifications";
import { isSafari } from "react-device-detect";
import Link from "next/link";
const slugify = require("@sindresorhus/slugify");
const MenuCart = ({ cartData, uID, deleteFromCart }) => {
  let cartTotalPrice = 0;
  const getDiscountPrice = (price, discount) => {
    return discount && discount > 0 ? price - price * (discount / 100) : null;
  };
  const { addToast } = useToasts();
  return (
    <div className="shopping-cart-content">
      {cartData && cartData.length ? (
        <Fragment>
          <ul>
            {cartData &&
              cartData.map((single, key) => {
                const discountedPrice = getDiscountPrice(
                  single.price,
                  single.discount
                );
                const finalProductPrice = single.price;
                const finalDiscountedPrice = discountedPrice;

                discountedPrice != null
                  ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                  : (cartTotalPrice += finalProductPrice * single.quantity);

                return (
                  <li className="single-shopping-cart" key={key}>
                    <div className="shopping-cart-img">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/product/${
                          single.serialNumber
                        }/${slugify(single.description)}`}
                      >
                        <a>
                          <img
                            alt=""
                            src={
                              isSafari
                                ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.images[0].fields.file.url
                                : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                    single.images[0].fields.file.url}?fm=jpg`
                            }
                            className="img-fluid"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="shopping-cart-title">
                      <h4>
                        <Link
                          href={`${
                            process.env.NEXT_PUBLIC_PUBLIC_URL
                          }/product/${single.serialNumber}/${slugify(
                            single.description
                          )}`}
                        >
                          <a>{single.description}</a>
                        </Link>
                      </h4>

                      <h6>Qty: {single.quantity}</h6>
                      <span>
                        {discountedPrice !== null
                          ? `AED ` + finalDiscountedPrice
                          : `AED ` + finalProductPrice}
                      </span>
                      {single.selectedProductColor &&
                      single.selectedProductSize ? (
                        <div className="cart-item-variation">
                          <span>Color: {single.selectedProductColor}</span>
                          <span>Size: {single.selectedProductSize}</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="shopping-cart-delete">
                      <button
                        aria-label="delete-cart"
                        onClick={() => deleteFromCart(single, addToast, uID)}
                      >
                        <i className="fa fa-times-circle" />
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {`AED ` + cartTotalPrice.toFixed(2)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/cart"}>
              <a className="default-btn">view cart</a>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/checkout"}>
              <a className="default-btn">checkout</a>
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.array,
  currency: PropTypes.object,
  deleteFromCart: PropTypes.func
};

export default MenuCart;
