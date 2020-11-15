import React from "react";
import { isSafari, isIE, isFirefox } from "react-device-detect";
const slugify = require("@sindresorhus/slugify");

const ProductSchema = ({ product }) => {
  return (
    <div>
      <div itemType="https://schema.org/Product" itemScope>
        <meta itemProp="gtin" content={product.gtin} />
        <meta itemProp="mpn" content={product.serialNumber} />
        <meta itemProp="name" content={product.collectionName} />
        <link
          itemProp="image"
          href={
            !(isSafari || isIE || isFirefox)
              ? `https:${product.images[0].fields.file.url}`
              : `https:${product.images[0].fields.file.url}?fm=jpg`
          }
        />
        <link
          itemProp="image"
          href={
            !(isSafari || isIE || isFirefox)
              ? `https:${product.images[1].fields.file.url}`
              : `https:${product.images[1].fields.file.url}?fm=jpg`
          }
        />
        <meta itemProp="description" content={product.description} />
        <div itemProp="offers" itemType="https://schema.org/Offer" itemScope>
          <link
            itemProp="url"
            href={`https://sanaakayum.com/product/${slugify(
              product.description
            )}`}
          />
          {product.stock > 1 ? (
            <meta
              itemProp="availability"
              content="https://schema.org/InStock"
            />
          ) : (
            <meta
              itemProp="availability"
              content="https://schema.org/OutOfStock"
            />
          )}
          <meta itemProp="priceCurrency" content="AED" />
          <meta
            itemProp="itemCondition"
            content="https://schema.org/NewCondition"
          />
          <meta itemProp="price" content={product.price} />

          <div
            itemProp="seller"
            itemType="https://schema.org/Organization"
            itemScope
          >
            <meta itemProp="name" content="Sana\'a Kayum" />
          </div>
        </div>
        <div
          itemProp="aggregateRating"
          itemType="https://schema.org/AggregateRating"
          itemScope
        >
          <meta itemProp="reviewCount" content="89" />
          <meta itemProp="ratingValue" content={product.rating} />
        </div>

        <meta itemProp="sku" content={product.serialNumber} />
        <div itemProp="brand" itemType="https://schema.org/Brand" itemScope>
          <meta itemProp="name" content="Sana'a Kayum" />
        </div>
      </div>
    </div>
  );
};

export default ProductSchema;
