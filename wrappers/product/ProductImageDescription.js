import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";
const slugify = require("@sindresorhus/slugify");

import MetaTags from "react-meta-tags";
import HeaderMeta from "../../components/header/HeaderMeta";
import ProductSchema from "../../components/header/ProductSchema";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
  currency,
  cartItems,
  wishlistItems,
  compareItems
}) => {
  const wishlistItem = wishlistItems.filter(
    wishlistItem => wishlistItem.id === product?product.serialNumber:""
  )[0];
  const compareItem = compareItems.filter(
    compareItem => compareItem.id === product?product.serialNumber:""
  )[0];
  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product?product.price:0, product?product.discount:0);
  const finalProductPrice = +(product?product.price * currency.currencyRate:1).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      {product?
      <>
      <HeaderMeta
        article={product.article}
        title={product.description}
        description={product.description}
        image={`https:${product.images[0].fields.file.url}?fm=jpg`}
        keywords={
          `${product.tags}, Sana\'a Kayum, Dubai, Fashion, ` +
          `${product.article}, ` +
          `${product.description}`
        }
        url={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/product/${slugify(
          product.description
        )}`}
        color={product.color}
      />
      <ProductSchema product={product} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            {galleryType === "leftThumb" ? (
              <ProductImageGallerySideThumb
                product={product}
                thumbPosition="left"
              />
            ) : galleryType === "rightThumb" ? (
              <ProductImageGallerySideThumb product={product} />
            ) : galleryType === "fixedImage" ? (
              <ProductImageFixed product={product} />
            ) : (
              <ProductImageGallery product={product} />
            )}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              discountedPrice={discountedPrice}
              currency={currency}
              finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              addToast={addToast}
            />
          </div>
        </div>
      </div>
      </>
      :""}
      
    </div>
  );
};

ProductImageDescription.propTypes = {
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  galleryType: PropTypes.string,
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

export default connect(mapStateToProps)(ProductImageDescription);
