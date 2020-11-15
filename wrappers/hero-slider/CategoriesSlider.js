import React from "react";
import CategoriesSliderComponent from "../../components/hero-slider/CategoriesSliderComponent";
import { connect } from "react-redux";


const ProductSlider = ({ products, sliders }) => {
  const getProductCategories = () => {
    const productCategorylistList = products.map(product => {
      return product.article;
    });

    return [...new Set(productCategorylistList)];
  };
 
  const productCategorylistList = getProductCategories();
  const params = {
    breakpoints: {
      1200: {
        spaceBetween: 0,
        slidesPerView: 12,
        direction: "horizontal"
      },
      992: {
        spaceBetween: 10,
        slidesPerView: 3,
        direction: "horizontal"
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 3,
        direction: "horizontal"
      },
      640: {
        spaceBetween: 10,
        slidesPerView: 3,
        direction: "horizontal"
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 3,
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

  return (
    <div className="slider-active-2 nav-style-3">
    <CategoriesSliderComponent
      swiperParams={params}
      products={productCategorylistList}
      limit={productCategorylistList.limit}
      spaceBottomClass="mb-25"
      sliderClassName="swiper-slide"
    />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};
export default connect(mapStateToProps)(ProductSlider);
