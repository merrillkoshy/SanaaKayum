import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { Modal } from "react-bootstrap";
import Rating from "./sub-components/ProductRating";
import { connect } from "react-redux";
import whatsAppthis from "../../constants/whatsappHelper";

function ProductModal(props) {
  const { uID } = props;
  const { product } = props;
  const { currency } = props;
  const { discountedprice } = props;
  const { finalproductprice } = props;
  const { finaldiscountedprice } = props;

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.color ? product.color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const wishlistItem = props.wishlistitem;
  const compareItem = props.compareitem;

  const addToCart = props.addtocart;
  const addToWishlist = props.addtowishlist;
  const addToCompare = props.addtocompare;

  const addToast = props.addtoast;
  const cartItems = props.cartitems;

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHide}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-large-image-wrapper">
                <Swiper {...gallerySwiperParams}>
                  {product.images &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <picture>
                              <source
                                type="image/webp"
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}`}
                              />
                              <source
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                type="image/jpeg"
                                srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}?fm=jpg`}
                              />
                              <img
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                src={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}?fm=jpg`}
                              />
                            </picture>
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
              <div className="product-small-image-wrapper mt-15">
                <Swiper {...thumbnailSwiperParams}>
                  {product.images &&
                    product.images.map((single, key) => {
                      return (
                        <div key={key}>
                          <div className="single-image">
                            <picture>
                              <source
                                type="image/webp"
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}`}
                              />
                              <source
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                type="image/jpeg"
                                srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}?fm=jpg`}
                              />
                              <img
                                className="img-fluid"
                                itemProp="image"
                                alt={product.collectionName}
                                loading="lazy"
                                title={
                                  product.collectionName +
                                  " " +
                                  product.article +
                                  " by Sana'a Kayum"
                                }
                                src={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                                  single.fields.file.url}?fm=jpg`}
                              />
                            </picture>
                          </div>
                        </div>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>{product.collectionName}</h2>
                <h5>{product.article}</h5>
                <div className="product-details-price">
                  {discountedprice !== null ? (
                    <Fragment>
                      <span>
                        {/* {currency.currencySymbol + finaldiscountedprice} */}
                        {`AED ` + finaldiscountedprice}
                      </span>{" "}
                      <span className="old">
                        {/* {currency.currencySymbol + finalproductprice} */}
                        {`AED ` + finalproductprice}
                      </span>
                    </Fragment>
                  ) : (
                    <span>{currency.currencySymbol + finalproductprice} </span>
                  )}
                </div>
                {product.rating && product.rating > 0 ? (
                  <div className="pro-details-rating-wrap">
                    <div className="pro-details-rating">
                      <Rating ratingValue={product.rating} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="pro-details-list">
                  <p>{product.description}</p>
                </div>

                {product.color ? (
                  <div className="pro-details-size-color">
                    <div className="pro-details-color-wrap">
                      <span>Color</span>
                      <div className="pro-details-color-content">
                        <label
                          className={`pro-details-color-content--single ${product.color}`}
                        >
                          <input
                            type="radio"
                            value={product.color}
                            name="product-color"
                            checked={
                              product.color === selectedProductColor
                                ? "checked"
                                : ""
                            }
                            onChange={() => {
                              setSelectedProductColor(product.color);
                              setSelectedProductSize(product.size[0].name);
                              setProductStock(product.size[0].stock);
                              setQuantityCount(1);
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div className="pro-details-size">
                      <span>Size</span>
                      <div className="pro-details-size-content">
                        {product.size.map((sz, key) => {
                          return (
                            <label
                              className={`pro-details-size-content--single`}
                              key={key}
                            >
                              <input
                                type="radio"
                                value={sz.name}
                                name="product-size"
                                checked={
                                  sz.name === selectedProductSize
                                    ? "checked"
                                    : ""
                                }
                                onChange={() => {
                                  setSelectedProductColor(product.color);
                                  setSelectedProductSize(sz.name);
                                  setProductStock(sz.stock);
                                  setQuantityCount(1);
                                }}
                              />

                              <span className="size-name">{sz.name}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {product.affiliateLink ? (
                  <div className="pro-details-quality">
                    <div className="pro-details-cart btn-hover">
                      <a
                        href={product.affiliateLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <Fragment>
                    <div className="pro-details-quality">
                      <div className="cart-plus-minus">
                        <button
                          onClick={() =>
                            setQuantityCount(
                              quantityCount > 1 ? quantityCount - 1 : 1
                            )
                          }
                          className="dec qtybutton"
                        >
                          -
                        </button>
                        <input
                          className="cart-plus-minus-box"
                          type="text"
                          value={quantityCount}
                          readOnly
                        />
                        <button
                          onClick={() =>
                            setQuantityCount(
                              quantityCount < productStock - productCartQty
                                ? quantityCount + 1
                                : quantityCount
                            )
                          }
                          className="inc qtybutton"
                        >
                          +
                        </button>
                      </div>

                      <div className="pro-details-cart btn-hover">
                        {productStock && productStock > 0 ? (
                          <button
                            onClick={() =>
                              addToCart(
                                product,
                                addToast,
                                uID,
                                quantityCount,
                                selectedProductColor,
                                selectedProductSize
                              )
                            }
                            disabled={productCartQty >= productStock}
                          >
                            {" "}
                            Add To Cart{" "}
                          </button>
                        ) : (
                          <button disabled>Out of Stock</button>
                        )}
                      </div>

                      <div className="pro-details-wishlist">
                        <button
                          className={wishlistItem !== undefined ? "active" : ""}
                          disabled={wishlistItem !== undefined}
                          title={
                            wishlistItem !== undefined
                              ? "Added to wishlist"
                              : "Add to wishlist"
                          }
                          onClick={() => addToWishlist(product, addToast, uID)}
                        >
                          <i className="pe-7s-like" />
                        </button>
                      </div>
                    </div>
                    <div className="pro-details-quality">
                      <div className="pro-details-cart wapp">
                        {productStock && productStock > 0 ? (
                          <button
                            onClick={() => whatsAppthis(product)}
                            disabled={productCartQty >= productStock}
                          >
                            {" "}
                            <i className="fa fa-whatsapp"></i> {"Enquire"}{" "}
                          </button>
                        ) : (
                          <button disabled>Out of Stock</button>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

ProductModal.propTypes = {
  addtoast: PropTypes.func,
  addtocart: PropTypes.func,
  addtocompare: PropTypes.func,
  addtowishlist: PropTypes.func,
  cartitems: PropTypes.array,
  compareitem: PropTypes.object,
  currency: PropTypes.object,
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.object,
  show: PropTypes.bool,
  wishlistitem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartData
  };
};

export default connect(mapStateToProps)(ProductModal);
