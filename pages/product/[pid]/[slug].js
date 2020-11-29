import { useRouter } from "next/router";

import React from "react";

import LayoutOne from "../../../layouts/LayoutOne";

import RelatedProductSlider from "../../../wrappers/product/RelatedProductSlider";
import Skeleton from "react-loading-skeleton";

import ProductImageDescription from "../../../wrappers/product/ProductImageDescription";
import { isMobile } from "react-device-detect";

import { getProducts } from "../../../api/exports";

const slugify = require("@sindresorhus/slugify");

export async function getStaticPaths() {
  const res = await getProducts();
  const products = await res.map(p => {
    return p.fields;
  });

  const paths = products.map(product => ({
    params: {
      pid: product.serialNumber,
      slug: slugify(product.description)
    }
  }));

  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const res = await getProducts();
  const staticProducts = await res.map(p => {
    return p.fields;
  });
  const staticProduct = await staticProducts.filter(field => {
    if (field.serialNumber === params.pid) return field;
  })[0];

  return {
    props: {
      staticProduct
    },
    revalidate: 1
  };
}

const Product = ({ staticProduct }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      {staticProduct ? (
        <LayoutOne
          article={staticProduct.article}
          title={staticProduct.description}
          description={staticProduct.description}
          image={`https:${staticProduct.images[0].fields.file.url}`}
          keywords={
            `${staticProduct.tags}, Sana\'a Kayum, Dubai, Fashion, ` +
            `${staticProduct.article}, ` +
            `${staticProduct.description}`
          }
          url={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/product/${
            staticProduct.serialNumber
          }/${slugify(staticProduct.description)}`}
          color={staticProduct.color}
          headerTop="visible"
        >
          <ProductImageDescription
            spaceTopClass={isMobile ? "pt-10" : "pt-100"}
            spaceBottomClass={isMobile ? "pb-10" : "pb-100"}
            product={staticProduct}
            galleryType={"leftThumb"}
          />

          <RelatedProductSlider
            spaceBottomClass={isMobile ? "pt-10" : ""}
            category={staticProduct.article}
          />
        </LayoutOne>
      ) : (
        <Skeleton count={5} />
      )}
    </>
  );
};

export default Product;
