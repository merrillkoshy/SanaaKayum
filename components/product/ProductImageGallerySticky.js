import PropTypes from "prop-types";
import React from "react";

const productImageGallerySticky = ({ product }) => {
  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
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
      <div className="product-sticky-image mb--10">
        {product.images &&
          product.images.map((single, key) => {
            return (
              <div className="product-sticky-image__single mb-10" key={key}>
                <picture>
                  <source
                    type="image/webp"
                    className="img-fluid"
                    itemProp="image"
                    alt={single.collectionName}
                    loading="lazy"
                    title={
                      single.collectionName +
                      " " +
                      single.article +
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
                      single.collectionName +
                      " " +
                      single.article +
                      " by Sana'a Kayum"
                    }
                    type="image/jpeg"
                    srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                      single.fields.file.url}?fm=jpg`}
                  />
                  <img
                    className="img-fluid"
                    itemProp="image"
                    alt={single.collectionName}
                    loading="lazy"
                    title={
                      single.collectionName +
                      " " +
                      single.article +
                      " by Sana'a Kayum"
                    }
                    src={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                      single.fields.file.url}?fm=jpg`}
                  />
                </picture>
              </div>
            );
          })}
      </div>
    </div>
  );
};

productImageGallerySticky.propTypes = {
  product: PropTypes.object
};

export default productImageGallerySticky;
