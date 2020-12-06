import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";

import Rating from "./sub-components/ProductRating";
import whatsAppthis from "../../constants/whatsappHelper";
import Link from "next/link";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  uID,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  
  addToast,
  addToCart,
  addToWishlist,
  
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.color ? product.color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.size ? product.size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.stock ? product.stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  return (
    <div className="product-details-content ml-70">
      <h2>{product.collectionName}</h2>
      <h5>{product.article}</h5>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            {/* currency.currencySymbol */}
            <span>{`AED ` + finalDiscountedPrice}</span>{" "}
            <span className="old">{`AED ` + finalProductPrice}</span>
          </Fragment>
        ) : (
          <span>{`AED ` + finalProductPrice} </span>
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
                    product.color === selectedProductColor ? "checked" : ""
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
                      checked={sz.name === selectedProductSize ? "checked" : ""}
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
          <div className="pro-details-cart btn-hover ml-0">
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
        <div className="pro-details-quality">
          <div className="cart-plus-minus">
            <button
              onClick={() =>
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
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
          <div className="pro-details-cart wapp">
            {productStock && productStock > 0 ? (
              <button
                aria-label="order-now"
                onClick={() =>
                  setTimeout(() => {
                    
                    addToCart(
                      product,
                      addToast,
                      uID,
                      quantityCount,
                      selectedProductColor,
                      selectedProductSize
                    )
                  }, 1000)
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                Add To Cart{" "}
              </button>
            ) : (
              <button aria-label="order-now" disabled>
                Out of Stock
              </button>
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
              onClick={() => addToWishlist(product, addToast)}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          
        </div>
      )}
      {product.article ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            <li key={product.serialNumber}>
              <Link href={
                  process.env.NEXT_PUBLIC_PUBLIC_URL +
                  "/shop?search=" +
                  product.article.toLowerCase()
                }>
              <a
                
              >
                {product.article}
              </a>
              </Link>
            </li>
            {product.category.map((single, key) => {
              return (
                <li key={key}>
                  <Link href={
                      process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"
                    }>
                  <a
                    
                  >
                    {single}
                  </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {product.tags ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tags.map((single, key) => {
              return (
                <li key={key}>
                  <Link href={
                      process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"
                    }>
                  <a
                    
                  >
                    {single}
                  </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/SanaaKayum">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sanaa_kayum">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/sanaakayumhc">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/SKClothingart">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/sanaa-kayum">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
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
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
};

export default connect(null, mapDispatchToProps)(ProductDescriptionInfo);
