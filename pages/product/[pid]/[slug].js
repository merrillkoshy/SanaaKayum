import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../../wrappers/product/ProductImageDescription";
import { isMobile } from "react-device-detect";
const slugify = require("@sindresorhus/slugify");

const Product = products => {
  const router = useRouter();
  const { pid } = router.query;
  const product = products["products"].filter(
    single => single.serialNumber === pid
  )[0];
  console.log(product);
  return (
    <LayoutOne headerTop="visible">
      <ProductImageDescription
        spaceTopClass={isMobile ? "pt-10" : "pt-100"}
        spaceBottomClass={isMobile ? "pb-10" : "pb-100"}
        product={product}
      />

      {/* product description tab */}
      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        productFullDesc={product.description}
      />

      {/* related product slider */}
      <RelatedProductSlider
        spaceBottomClass="pb-95"
        category={product.article}
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
