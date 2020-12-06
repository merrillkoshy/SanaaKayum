import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Image from "antd/lib/image";

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
                   product.images[0].fields.file.url}`
               : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                   product.images[0].fields.file.url}?fm=jpg`
           }
           placeholder={<Skeleton height={150} />}
         />
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
