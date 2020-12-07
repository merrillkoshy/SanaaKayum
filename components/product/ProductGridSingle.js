import PropTypes from "prop-types";
import React, { Fragment, useState, forwardRef } from "react";

import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import Link from "next/link";

import LoginModal from "./LoginModal";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Image from "antd/lib/image";
const slugify = require("@sindresorhus/slugify");

const ProductGridSingle = forwardRef(({ onClick, href, ...props }, ref) => {
  const { loadCart } = props;
  
  const { loadWishlist } = props;
  const { loginUser } = props;
  const { userData } = props;
  const { uID } = props;
  const { product } = props;
  const { currency } = props;
  const { addToCart } = props;
  const { addToWishlist } = props;
  
  const { cartItem } = props;
  const { wishlistItem } = props;
  
  const { sliderClassName } = props;
  const { spaceBottomClass } = props;
  const { addToast } = props;

  const [modalShow, setModalShow] = useState(false);

  const [loginModal, setloginModal] = useState(false);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
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
              <Image
                width={"100%"}
                  className="default-img"
                  itemProp="image"
                  alt={product.collectionName}
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
                  placeholder={<Skeleton height={150} />}
                />

                {/* <img
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
                            .url}` || (
                          <Skeleton count={5} />
                        )
                      : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                          product.images[0].fields.file
                            .url}?fm=jpg` || (
                          <Skeleton count={5} />
                        )
                  }
                  
                /> */}

                {product.images.length > 1 ? (
                  // <img
                  //   className="hover-img"
                  //   itemProp="image"
                  //   alt={product.collectionName}
                  //   loading="lazy"
                  //   title={
                  //     product.collectionName +
                  //     " " +
                  //     product.article +
                  //     " by Sana'a Kayum"
                  //   }
                  //   src={
                  //     !(isSafari || isIE || isFirefox)
                  //       ? `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                  //           product.images[1].fields.file
                  //             .url}` || (
                  //           <Skeleton count={5} />
                  //         )
                  //       : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                  //           product.images[1].fields.file
                  //             .url}?fm=jpg` || (
                  //           <Skeleton count={5} />
                  //         )
                  //   }
                  // />
                  <Image
                  width={"100%"}
                  className="hover-img"
                  itemProp="image"
                  alt={product.collectionName}
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
                  placeholder={<Skeleton height={150} />}
                />
                ) : (
                  ""
                )}
              </a>
            </Link>
            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  aria-label="wishlist-add"
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => {
                    uID !== undefined
                        ?  addToWishlist(product, addToast, uID)
                        : setloginModal("true");
                   
                  }}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {product.affiliateLink ? (
                  "Buy now "
                ) : product.variation && product.variation.length >= 1 ? (
                  "Select Option"
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => {
                      if(uID !== undefined)
                      {
                        setTimeout(() => {
                          
                          addToCart(product, addToast, uID)
                        }, 1000);
                        
                      }
                      else{
                        setloginModal("true")
                      }

                    }}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Added to cart" : "Add to cart"
                    }
                  >
                    {" "}
                    <i className="pe-7s-cart"></i>{" "}
                    {cartItem !== undefined && cartItem.quantity > 0
                      ? "Added"
                      : "Add to cart"}
                  </button>
                ) : (
                  <button disabled className="active">
                    Out of Stock
                  </button>
                )}
              </div>
              <LoginModal
                show={loginModal}
                onHide={() => setloginModal(false)}
                loadCart={loadCart}
                
                loadWishlist={loadWishlist}
                loginUser={loginUser}
                addtoast={addToast}
              />
              <div className="pro-same-action pro-quickview">
                <button onClick={() => setModalShow(true)} title="Quick View">
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
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
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        
        uID={uID}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        
        addtoast={addToast}
       
      />
    </Fragment>
  );
});

ProductGridSingle.propTypes = {
  addToCart: PropTypes.func,
  
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default ProductGridSingle;
