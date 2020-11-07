import PropTypes from "prop-types";
import React from "react";

const ProductImageFixed = ({ product }) => {
  return (
    <div className="product-large-image-wrapper">
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

      <div className="product-fixed-image">
        {product.images ? (
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
                product.images[0].fields.file.url}`}
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
                product.images[0].fields.file.url}?fm=jpg`}
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
                product.images[0].fields.file.url}?fm=jpg`}
            />
          </picture>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

ProductImageFixed.propTypes = {
  product: PropTypes.object
};

export default ProductImageFixed;
