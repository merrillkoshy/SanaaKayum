import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Image from "antd/lib/image";

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
                   single.fields.file.url}`
               : `${
                  single.fields.file.url}?fm=jpg`
           }
           placeholder={<Skeleton height={150} />}
         />
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
