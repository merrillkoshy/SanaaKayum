import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { getProducts } from "../../helpers/product";
import HomePageProductSlider from "../../components/hero-slider/HomePageProductSlider";
import { connect } from "react-redux";
import { isSafari, isMobile } from "react-device-detect";
import { Row, Col, Button } from "react-bootstrap";

const ProductSlider = ({ products, sliders }) => {
  const getProducts = sliders => {
    const key = sliders.filterKey;
    const productList = products.filter((items, i) => {
      if (items[key] === sliders.filterValue) return items;
    });

    return [...new Set(productList)].slice(
      0,
      sliders.limit ? sliders.limit : productList.length
    );
  };
  const params = {
    breakpoints: {
      1200: {
        spaceBetween: 10,
        slidesPerView: 6,
        direction: "horizontal"
      },
      992: {
        spaceBetween: 10,
        slidesPerView: 5,
        direction: "horizontal"
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        spaceBetween: 6,
        slidesPerView: 3,
        direction: "horizontal"
      },
      320: {
        spaceBetween: 3,
        slidesPerView: 2,
        direction: "horizontal"
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return "under construction";
  // return (
  //   sliders &&
  //   sliders.map(slider => {
  //     return (
  //       <div key={slider.id} className="slider-area px-lg-5 px-xs-1">
  //         <div className="slider-active-2 nav-style-3 px-lg-5 px-xs-1">
  //           {slider.featureSlide ? (
  //             <>
  //               <div
  //                 className="slider-content-2 slider-animated-1 text-center"
  //                 style={
  //                   !isMobile
  //                     ? {
  //                         background:
  //                           "url(" +
  //                           slider.sliderMedia.fields.file.url +
  //                           ") no-repeat center center",
  //                         backgroundSize: "contain"
  //                       }
  //                     : {
  //                         background:
  //                           "url(" +
  //                           slider.sliderMedia.fields.file.url +
  //                           ") no-repeat",
  //                         backgroundPosition: "50% 2%",
  //                         backgroundSize: "cover"
  //                       }
  //                 }
  //               >
  //                 <h1 className="animated mb-xs-0 mb-sm-0 mb-md-0">
  //                   {slider.featureSlideData.text}
  //                 </h1>

  //                 <div className="slider-btn-5 btn-hover">
  //                   <a
  //                     className="animated p-sm-3"
  //                     href={
  //                       slider.featureSlideData.action
  //                         ? slider.featureSlideData.action
  //                         : process.env.NEXT_PUBLIC_PUBLIC_URL + `/shop`
  //                     }
  //                   >
  //                     {slider.featureSlideData.button}
  //                   </a>
  //                 </div>
  //               </div>
  //             </>
  //           ) : (
  //             ""
  //           )}
  //           <Row className="mx-auto">
  //             <Col>
  //               {isMobile ? (
  //                 <h4>{slider.sliderHeading}</h4>
  //               ) : (
  //                 <h2>{slider.sliderHeading}</h2>
  //               )}{" "}
  //             </Col>
  //             <Col className="text-right">
  //               <Button
  //                 style={{
  //                   backgroundColor: "transparent",
  //                   borderColor: "black"
  //                 }}
  //               >
  //                 <a
  //                   href={
  //                     process.env.NEXT_PUBLIC_PUBLIC_URL +
  //                     `/shop?search=` +
  //                     slider.filterValue
  //                   }
  //                 >
  //                   View All
  //                 </a>
  //               </Button>
  //             </Col>
  //           </Row>

  //           <HomePageProductSlider
  //             swiperParams={params}
  //             products={getProducts(slider)}
  //             limit={slider.limit}
  //             spaceBottomClass="mb-25"
  //             sliderClassName="swiper-slide"
  //           />
  //         </div>
  //       </div>
  //     );
  //   })
  // );
};

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    sliders: state.sliderData.sliders
  };
};
export default connect(mapStateToProps)(ProductSlider);
