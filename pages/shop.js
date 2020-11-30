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
      <LayoutOne
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={"https://sanaakayum.com/shop"}
        color={"#000000"}
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
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

                  {/* <Pagination
                  showQuickJumper
                    defaultCurrent={1}
                    defaultPageSize={pageLimit}
                    pageSize={pageLimit}
                    onChange={(page, pageSize)=>{
                      setOffset(page*pageSize-pageSize)
                    }}
                    
                    size="small"
                    total={sortedProducts.length}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}

                  /> */}
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
