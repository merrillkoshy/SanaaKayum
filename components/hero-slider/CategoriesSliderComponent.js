import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";

import { isSafari } from "react-device-detect";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CategoriesSliderComponent = ({
  swiperParams,
  products,
  limit,
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      <Swiper {...swiperParams}>
        {products &&
          products.map((product, i) => {
            return (
              <div
                key={i}
                className={`col ${
                  sliderClassName ? sliderClassName : ""
                }`}
              >
                <Card style={{ width: "130px",border:"none"}}>
                  
                  <Card.Body className="p-3"> 
                    
                      
                      <Card.Img
                        variant="top"
                        src={
                          `https://sanaakayum.com/Assets/categories/${product.replace(
                                /\s/g,
                                "%20"
                              )}.png`
                        }
                      />
                      {/* <Card.Text>
                        <strong>sanaa_kayum</strong> Shop {product} #{product}{" "}
                        #sanaakayum
                      </Card.Text> */}
                  </Card.Body>
                  
                </Card>
              </div>
            );
          })}
      </Swiper>
    </Fragment>
  );
};

CategoriesSliderComponent.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

export default CategoriesSliderComponent;
