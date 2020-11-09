import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../../wrappers/product/ProductImageDescription";
import { isMobile } from "react-device-detect";
import HeaderMeta from "../../../components/header/HeaderMeta";
const slugify = require("@sindresorhus/slugify");

const Product = products => {
  const router = useRouter();
  const { pid } = router.query;
  const product = products["products"].filter(
    single => single.serialNumber === pid
  )[0];
 
  return (
    <LayoutOne headerTop="visible">
        
    <HeaderMeta
      article={product.article}
      title={product.description}
      description={product.description}
      image={`https:${product.images[0].fields.file.url}`}
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
    
    <ProductImageDescription
        spaceTopClass={isMobile ? "pt-10" : "pt-100"}
        spaceBottomClass={isMobile ? "pb-10" : "pb-100"}
        product={product}
      />

      {/* product description tab */}
      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        productFullDesc={product?product.description:""}
      />

      {/* related product slider */}
      <RelatedProductSlider
        spaceBottomClass="pb-95"
        category={product?product.article:""}
      />
    </LayoutOne>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};
export default connect(mapStateToProps)(Product);
