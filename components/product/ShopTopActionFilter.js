import PropTypes from "prop-types";
import React, { Fragment,useState,useEffect } from "react";
import ShopTopFilter from "./ShopTopFilter";
import {setActiveSort
} from "../../helpers/product"
import { Row,Col, Button } from "react-bootstrap";

const ShopTopActionFilter = ({
  getFilterSortParams,
  productCount,
  sortedProductCount,
  products,
  getSortParams
}) => {
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <Fragment>
      {scroll>headerTop?
      <Row className="sticky-menu pt-20 justify-content-md-center">
        
        <Col className="col-4">
        <div>
          <i className="fa fa-sort">sort</i> 
          <select
                  onChange={e => getFilterSortParams("filterSort", e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="priceHighToLow">Price - High to Low</option>
                  <option value="priceLowToHigh">Price - Low to High</option>
                </select>
        </div>
        </Col>
        <Col className="col-3 text-center">
        <Button onClick={handleShow} className="filter-active">
          <i className="fa fa-filter">filter</i> 
        </Button>
       
        </Col>
       
      </Row>
      :
              <>
              <p>
              Showing {sortedProductCount} of {productCount} result
              </p>
              <Row className="shop-top-bar">
                <Col>

                <div className="select-shoing-wrap">
                <i className="fa fa-sort"></i> Sort
                <div className="shop-select">

                <select
                  onChange={e => getFilterSortParams("filterSort", e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="priceHighToLow">Price - High to Low</option>
                  <option value="priceLowToHigh">Price - Low to High</option>
                </select>
                </div>

                </div>
                </Col>
                <Col >
                {/* shop top filter */}
                <Button  onClick={handleShow} className="filter-active">
                <i className="fa fa-filter"></i> filter
                </Button>
                
                </Col>
              </Row>
              </>
      }
      <ShopTopFilter show={show} 
                onHide={handleClose} 
                products={products} 
                getSortParams={getSortParams} />
    </Fragment>
  );
};

ShopTopActionFilter.propTypes = {
  getFilterSortParams: PropTypes.func,
  getSortParams: PropTypes.func,
  productCount: PropTypes.number,
  products: PropTypes.array,
  sortedProductCount: PropTypes.number
};

export default ShopTopActionFilter;
