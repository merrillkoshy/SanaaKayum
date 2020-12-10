import PropTypes from "prop-types";
import React, { Fragment, useState, forwardRef } from "react";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";
import whatsAppthis from "../../constants/whatsappHelper";
import { isSafari, isIE, isFirefox } from "react-device-detect";

import Skeleton from "react-loading-skeleton";

import Image from "antd/lib/image";
import { Card } from "react-bootstrap";

const slugify = require("@sindresorhus/slugify");

const ProductGridListSingle = forwardRef(({ onClick, href, ...props }, ref) => {
  const { entryID } = props;
  const { product } = props;
  const { currency } = props;
  const { addToCart } = props;
  const { addToWishlist } = props;

  const { cartItem } = props;
  const { wishlistItem } = props;

  const { sliderClassName } = props;
  const { spaceBottomClass } = props;
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = props;
  const { loadCart } = props;

  const { loadWishlist } = props;
  const { loginUser } = props;

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-6 ${sliderClassName ? sliderClassName : ""}`}
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
                      ? `${
                          product.images[0].fields.file.url}`
                      : `${
                          product.images[0].fields.file.url}?fm=jpg`
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
                      ? `${
                          product.images[0].fields.file
                            .url}` || (
                          <Skeleton count={5} />
                        )
                      : `${
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
                  //       ? `${
                  //           product.images[1].fields.file
                  //             .url}` || (
                  //           <Skeleton count={5} />
                  //         )
                  //       : `${
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
                        ? `${
                            product.images[1].fields.file.url}`
                        : `${
                            product.images[1].fields.file.url}?fm=jpg`
                    }
                    placeholder={<Skeleton height={150} />}
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

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  aria-label="wishlist-item"
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => {
                    addToWishlist(product, addToast, entryID);
                  }}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Buy now{" "}
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  "Select Option"
                ) : product.stock && product.stock > 0 ? (
                  <button
                    aria-label="order-now"
                    // onClick={() => whatsAppthis(product)}
                    onClick={() =>
                      global.window &&
                      (global.window.location.href = ` ${
                        process.env.NEXT_PUBLIC_DOMAIN
                      }/product/${product.serialNumber}/${slugify(
                        product.description
                      )}`)
                    }
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={cartItem !== undefined ? "Added to cart" : "Details"}
                  >
                    {" "}
                    <i className="pe-7s-note2"></i>{" "}
                    {cartItem !== undefined && cartItem.quantity > 0
                      ? "Added"
                      : "Details"}
                  </button>
                ) : (
                  <button aria-label="order-now" disabled className="active">
                    Out of Stock
                  </button>
                )}
              </div>
              <div className="pro-same-action pro-quickview">
                <button
                  aria-label="quick-view"
                  onClick={() => setModalShow(true)}
                  title="Quick View"
                >
                  <i className="pe-7s-look" />
                </button>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <strong>{product.article || <Skeleton count={5} />}</strong>
              {" | "}

              {product.collectionName || <Skeleton count={5} />}
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
                  <span>
                    {`AED ` + finalDiscountedPrice || <Skeleton count={5} />}
                  </span>{" "}
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
        <div className="shop-list-wrap mb-30">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Image
                    width={"100%"}
                    className="default-img img-fluid"
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
                        ? `${
                            product.images[0].fields.file.url}`
                        : `${
                            product.images[0].fields.file.url}?fm=jpg`
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
                      ? `${
                          product.images[0].fields.file
                            .url}` || (
                          <Skeleton count={5} />
                        )
                      : `${
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
                    //       ? `${
                    //           product.images[1].fields.file
                    //             .url}` || (
                    //           <Skeleton count={5} />
                    //         )
                    //       : `${
                    //           product.images[1].fields.file
                    //             .url}?fm=jpg` || (
                    //           <Skeleton count={5} />
                    //         )
                    //   }
                    // />
                    <Image
                      width={"100%"}
                      className="hover-img img-fluid"
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
                          ? `${
                              product.images[1].fields.file.url}`
                          : `${
                              product.images[1].fields.file.url}?fm=jpg`
                      }
                      placeholder={<Skeleton height={150} />}
                    />
                  ) : (
                    ""
                  )}

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
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>{product.collectionName}</h3>
                <div className="product-list-price">
                  {discountedPrice !== null ? (
                    <Fragment>
                      <span>
                        {/* {currency.currencySymbol + finalDiscountedPrice} */}
                        {`AED ` + finalDiscountedPrice}
                      </span>{" "}
                      <span className="old">
                        {/* {currency.currencySymbol + finalProductPrice} */}
                        {`AED ` + finalProductPrice}
                      </span>
                    </Fragment>
                  ) : (
                    // <span>{currency.currencySymbol + finalProductPrice} </span>
                    <span>{`AED ` + finalProductPrice} </span>
                  )}
                </div>
                {product.rating && product.rating > 0 ? (
                  <div className="rating-review">
                    <div className="product-list-rating">
                      <Rating ratingValue={product.rating} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {product.description ? (
                  <p>{product.description || <Skeleton count={5} />}</p>
                ) : (
                  ""
                )}

                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover">
                    {product.affiliateLink ? (
                      <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {" "}
                        Buy now{" "}
                      </a>
                    ) : product.variation && product.variation.length >= 1 ? (
                      "Select Option"
                    ) : product.stock && product.stock > 0 ? (
                      <button
                        aria-label="order-now"
                        onClick={() => {
                          // whatsAppthis(product);
                          setTimeout(() => {
                            addToCart(product, addToast, entryID);
                          }, 1000);
                        }}
                        className={
                          cartItem !== undefined && cartItem.quantity > 0
                            ? "active"
                            : ""
                        }
                        disabled={
                          cartItem !== undefined && cartItem.quantity > 0
                        }
                        title={
                          cartItem !== undefined ? "Added to cart" : "Details"
                        }
                      >
                        {" "}
                        <i className="pe-7s-note2"></i>{" "}
                        {cartItem !== undefined && cartItem.quantity > 0
                          ? "Added"
                          : "Details"}
                      </button>
                    ) : (
                      <button
                        aria-label="order-now"
                        disabled
                        className="active"
                      >
                        Out of Stock
                      </button>
                    )}
                  </div>

                  <div className="shop-list-wishlist ml-10">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      disabled={wishlistItem !== undefined}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => addToWishlist(product, addToast, entryID)}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                </div>
              </div>
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
        uID={entryID}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtoast={addToast}
        
      />
    </Fragment>
  );
});

ProductGridListSingle.propTypes = {
  addToCart: PropTypes.func,

  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,

  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object
};

export default ProductGridListSingle;
