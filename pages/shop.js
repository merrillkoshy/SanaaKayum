import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

// import Paginator from "react-hooks-paginator";
import { Pagination } from "antd";

import HeaderMeta from "../components/header/HeaderMeta";
import { connect } from "react-redux";
import { getSortedProducts } from "../helpers/product";
import LayoutOne from "../layouts/LayoutOne";

import ShopSidebar from "../wrappers/product/ShopSidebar";
import ShopTopbar from "../wrappers/product/ShopTopbar";
import ShopTopbarFilter from "../wrappers/product/ShopTopbarFilter";
import ShopProducts from "../wrappers/product/ShopProducts";

import { isMobile, isTablet } from "react-device-detect";
import { animateScroll } from "react-scroll";


const ShopGridFullWidth = ({ products, lingerie }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 16;

  const getLayout = layout => {
    isMobile || isTablet ? setLayout("grid two-column") : setLayout(layout);
  };
  const scrollToTop = () => {
    animateScroll.scrollToTop();
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
      <HeaderMeta
        article={"Exquisite Wardrobe"}
        title={
          "Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic couture | Sana'a Kayum"
        }
        description={
          "Featuring a wide variety of Arabian, Western, Indo-Arabian, Ethnic couture | Sana'a Kayum"
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={`/shop`}
        color={"#000000"}
      />

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
                  {/* <Button className="scrollToTop" onClick={()=>{
                     window.scrollTo(0, 0);
                    }}> */}
                  
                  <Pagination
                    defaultCurrent={1}
                    defaultPageSize={pageLimit}
                    onChange={() => {
                      scrollToTop();
                      setOffset;
                    }}
                    showSizeChanger={true}
                    size="small"
                    total={sortedProducts.length}
                  />
                  {/* <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  /> */}
                  {/* </Button> */}
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
