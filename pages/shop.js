import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import Paginator from "react-hooks-paginator";

import { connect } from "react-redux";
import { getSortedProducts } from "../helpers/product";
import LayoutOne from "../layouts/LayoutOne";

import ShopSidebar from "../wrappers/product/ShopSidebar";
import ShopTopbar from "../wrappers/product/ShopTopbar";
import ShopTopbarFilter from "../wrappers/product/ShopTopbarFilter";
import ShopProducts from "../wrappers/product/ShopProducts";
import { Helmet } from "react-helmet";
import { isMobile, isTablet } from "react-device-detect";

const ShopGridFullWidth = ({ location, products, lingerie }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;

  const getLayout = layout => {
    isMobile || isTablet ? setLayout("grid two-column") : setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(
      products,
      sortType,
      sortValue,
      lingerie
    );
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <Helmet>
        <title>
          Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic
          couture | Sana'a Kayum{" "}
        </title>
        <link rel="canonical" href={`https://sanaakayum.com/shop`} />
        <meta
          property="og:title"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
couture | Sana'a Kayum"
        />
        <link href="https://images.ctfassets.net/" rel="dns-prefetch" />
        <meta
          property="Description"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta
          property="og:description"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta
          name="Keywords"
          content={
            `Arabian, Sana\'a Kayum, Dubai, Fashion, ` +
            `Western, Indo-Arabian couture, Ethnic couture`
          }
        />
        <meta
          name="og:url"
          property="og:url"
          content={`https://sanaakayum.com/shop`}
        />

        <meta
          name="og:image"
          content="https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"
        />
        <meta name="og:image:width" content="200" />
        <meta name="og:image:height" content="200" />
        {/* Open Graph */}

        <meta property="og:type" content="website" />

        <meta
          property="og:image:secure_url"
          content="https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta
          property="og:image:alt"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta property="og:site_name" content="Sana'a Kayum" />

        <meta
          itemProp="name"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta
          itemProp="description"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta
          itemProp="image"
          content="https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@SKClothingart" />
        <meta name="twitter:creator" content="@SKClothingart" />
        <meta
          name="twitter:title"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta
          name="twitter:description"
          content="Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic 
            couture | Sana'a Kayum"
        />
        <meta name="twitter:app:country" content="ae" />
        <meta
          name="twitter:image"
          content="https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"
        />
      </Helmet>

      {/* <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + pathname}>
        Shop
      </BreadcrumbsItem> */}

      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}

        <div className={`shop-area ${isMobile ? "" : "pt-50 pb-100"}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 order-1">
                {/* shop sidebar */}
                <ShopSidebar
                  products={products}
                  getSortParams={getSortParams}
                  sideSpaceClass={isMobile ? "" : "mr-30"}
                />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                {isMobile ? (
                  <ShopTopbarFilter
                    getLayout={getLayout}
                    getFilterSortParams={getFilterSortParams}
                    productCount={products.length}
                    sortedProductCount={currentData.length}
                    products={products}
                    getSortParams={getSortParams}
                  />
                ) : (
                  <ShopTopbar
                    getLayout={getLayout}
                    getFilterSortParams={getFilterSortParams}
                    productCount={products.length}
                    sortedProductCount={currentData.length}
                  />
                )}

                {/* shop page content default */}
                <ShopProducts
                  layout={isMobile ? "grid two-column" : "grid three-column"}
                  products={currentData}
                />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ShopGridFullWidth.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
  lingerie: PropTypes.array
};

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    lingerie: state.lingerieData.lingerie
  };
};

export default connect(mapStateToProps)(ShopGridFullWidth);
