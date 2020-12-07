import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import PBanners from "../../components/hero-slider/promoBanners.js";
import { connect } from "react-redux";


const PromotionsSlider = pBannersNow => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
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

  return (
    <div className="slider-area">
      <div className="slider-active-2 nav-style-3">
      
        {/* <Swiper {...params}> */}
          <PBanners pBanners={pBannersNow.pBannersNow.pBanners} sliderClassName="swiper-slide" />
          
        {/* </Swiper> */}
      </div>
    </div>
  );
};

PromotionsSlider.propTypes = {
  pBannersNow: PropTypes.object
};
const mapStateToProps = (state) => {
  return {
    pBannersNow: state.pBannersData
  };
};
export default connect(mapStateToProps)(PromotionsSlider);
