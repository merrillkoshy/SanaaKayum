import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
import ShopSize from "../../components/product/ShopSize";
import ShopTag from "../../components/product/ShopTag";

import { window } from "ssr-window";
import { isMobile } from "react-device-detect";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);

  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  };
  var param = getUrlParameter("search");
  useEffect(() => {
    getSortParams("query", param);
  }, [param]);

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      <ShopSearch getSortParams={getSortParams} />

      {isMobile ? (
        ""
      ) : (
        <>
          {/* filter by categories */}
          <ShopCategories
            categories={uniqueCategories}
            getSortParams={getSortParams}
          />

          {/* filter by color */}
          <ShopColor colors={uniqueColors} getSortParams={getSortParams} />

          {/* filter by size */}
          <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} />

          {/* filter by tag */}
          <ShopTag tags={uniqueTags} getSortParams={getSortParams} />
        </>
      )}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
