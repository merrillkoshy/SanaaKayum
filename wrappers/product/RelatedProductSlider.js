import PropTypes from "prop-types";
import React,{useState,useEffect} from "react";
import Swiper from "react-id-swiper";
import ProductGrid from "./ProductGrid";
import OwlCarousel from "react-owl-carousel3";
import Skeleton from "react-loading-skeleton";

const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  const [display, setDisplay] = useState(false);

  useEffect(()=>{
    setDisplay(true)
  })
  const options = {
    nav: true,
    dots: false,
    center: false,
    touchDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      330: {
        items: 2
      },
      460: {
        items: 3
      },
      600: {
        items: 4
      },
      850: {
        items: 5
      },
      1000: {
        items: 6
      },
      1200: {
        items: 7
      },
      1300: {
        items: 8
      },
      1600: {
        items: 8
      }
    },
    mouseDrag: true,
    navText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
    ]
  };
  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <h2>Related Products</h2>
        
        <div className="row">
        {display?<OwlCarousel  {...options} className="owl-theme" nav>
            
            <ProductGrid
              article={category}
              limit={6}
              sliderClassName="swiper-slide"
            />
          </OwlCarousel>:<Skeleton height={150} />}
        </div>
      </div>
    </div>
  );
};



export default RelatedProductSlider;
