import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";


import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Link from "next/link";

const CategoriesSliderComponent = ({
  swiperParams,
  products,
  limit,
  sliderClassName,
  spaceBottomClass
}) => {

  const carelessArray=[
    "Sensual Wear",
    "Baby Doll",
    "Lounge Wear",
    "Sleep Wear",
    "Shorts",
    "Camisole",
    "Slip Dress",
    "House Gown",
    "Midi Dress",
    "Cape Dress",
    "Pajama",
    "Maxi Gown"]
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
                    <Link  href={
                            process.env.NEXT_PUBLIC_PUBLIC_URL +
                            `/shop?search=` +
                            product
                          }>
                            <a>
                      {!carelessArray.includes(product)?
                      <Card.Img
                        variant="top"
                        src={
                          `/assets/categories/${product.replace(
                                /\s/g,
                                "%20"
                              )}.png`
                        }
                        onError={(e)=>{e.target.onerror = null; e.target.src=`/assets/categories/placeholder.png`}}
                      />
                      :
                      <Card.Img
                        variant="top"
                        src={
                          `/assets/categories/careless.png`
                        }
                        onError={(e)=>{e.target.onerror = null; e.target.src=`/assets/categories/placeholder.png`}}
                      />
                    }</a>
                      {/* <Card.Text>
                        <strong>sanaa_kayum</strong> Shop {product} #{product}{" "}
                        #sanaakayum
                      </Card.Text> */}
                      </Link>
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
