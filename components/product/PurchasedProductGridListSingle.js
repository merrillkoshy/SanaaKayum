import React, { Fragment, useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Image from "next/image";
const slugify = require("@sindresorhus/slugify");

const PurchasedProductGridListSingle = forwardRef(
  ({ onClick, href, ...props }, ref) => {
    const { sliderClassName } = props;
    const { spaceBottomClass } = props;
    const { product } = props;
    const { currency } = props;

    const discountedPrice = getDiscountPrice(product.price, product.discount);
    const finalProductPrice = +(product.price * currency.currencyRate).toFixed(
      2
    );
    const finalDiscountedPrice = +(
      discountedPrice * currency.currencyRate
    ).toFixed(2);
    const [stamp, setStamp] = useState("");
    useEffect(()=>{
      setTimeout(() => {
        setStamp("loaded")
    }, 2000);
    })
    return (
      <Fragment>
        <div
          className={`col-3 ${sliderClassName ? sliderClassName : ""} ${stamp}`}
        >
          <div class='stamp'>
          <div
            className={`product-wrap my-2`}
          >
            <div className="product-img">
              <Link
                key={product.serialNumber}
                href={{
                  pathname: `/product/[pid]/[slug]`,
                  query: {
                    pid: product.serialNumber,
                    slug: slugify(product.description)
                  }
                }}
              >
                <a className="next-link">
                  <img
                    className="default-img"
                    itemProp="image"
                    alt={product.collectionName}
                    loading="lazy"
                    title={
                      product.collectionName +
                      " " +
                      product.article +
                      " by Sana'a Kayum"
                    }
                    src={
                      !(isSafari || isIE || isFirefox)
                        ? `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.images[0].fields.file
                              .url}`
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.images[0].fields.file
                              .url}?fm=jpg`
                    }
                  />

                  {product.images.length > 1 ? (
                    <img
                      className="hover-img"
                      itemProp="image"
                      alt={product.collectionName}
                      loading="lazy"
                      title={
                        product.collectionName +
                        " " +
                        product.article +
                        " by Sana'a Kayum"
                      }
                      src={
                        !(isSafari || isIE || isFirefox)
                          ? `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              product.images[1].fields.file
                                .url}`
                          : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              product.images[1].fields.file
                                .url}?fm=jpg`
                      }
                    />
                  ) : (
                    ""
                  )}
                </a>
              </Link>
              {product.discount || product.new ? (
                <div className="product-img-badges">
                  {product.discount ? (
                    <span className="pink">-{product.discount}%</span>
                  ) : (
                    ""
                  )}
                  {product.new ? <span className="purple">New</span> : ""}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="product-content text-center">
              <h3>
                <strong>{product.article}</strong>
                {" | "}

                {product.collectionName}
              </h3>
              {product.rating && product.rating > 0 ? (
                <div className="product-rating d-none">
                  <Rating ratingValue={product.rating} />
                </div>
              ) : (
                ""
              )}
              {product.rating && product.rating > 0 ? (
                <div className="product-rating" className="d-none">
                  <Rating ratingValue={product.rating} />
                </div>
              ) : (
                ""
              )}
              <div className="product-price">
                {discountedPrice !== null ? (
                  <Fragment>
                    {/* {/* <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "} */}
                    <span>{`AED ` + finalDiscountedPrice}</span>{" "}
                    <span className="old">
                      {/* {currency.currencySymbol + finalProductPrice} */}
                      {`AED `}
                      <strong> {finalProductPrice}</strong>
                    </span>
                  </Fragment>
                ) : (
                  // <span>{currency.currencySymbol + finalProductPrice} </span>
                  <span>
                    {`AED `}
                    <strong> {finalProductPrice}</strong>{" "}
                  </span>
                )}
              </div>
              {product.quantity ? (
                <div className="product-price text-danger">
                  Ordered Quantity: {product.quantity}
                </div>
              ) : (
                ""
              )}
              {product.size ? (
                <>
                  <div className="product-price ">
                    <strong>GTIN:</strong>{"   "}
                    {product.size[0].gtin}
                  </div>
                  <div className="product-price ">
                    <strong>SIZE:</strong>{"   "}
                    {product.size[0].name}
                  </div>
                  <div className="product-price">
                    <strong>STOCK:</strong>{"   "}
                    {product.size[0].stock}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          </div>
        </div>
      </Fragment>
    );
  }
);

export default PurchasedProductGridListSingle;
