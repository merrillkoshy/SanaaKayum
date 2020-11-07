import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";

const ProductImageGallerySlider = ({ product }) => {
  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
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
    ),
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--slider">
      <Swiper {...gallerySwiperParams}>
        {product.images &&
          product.images.map((single, key) => {
            return (
              <div key={key}>
                <div className="single-image">
                  <picture>
                    <source
                      type="image/webp"
                      className="img-fluid"
                      itemProp="image"
                      alt={product.collectionName}
                      loading="lazy"
                      title={
                        product.collectionName +
                        " " +
                        product.article +
                        " by Sana'a Kayum"
                      }
                      srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                        single.fields.file.url}`}
                    />
                    <source
                      className="img-fluid"
                      itemProp="image"
                      alt={product.collectionName}
                      loading="lazy"
                      title={
                        product.collectionName +
                        " " +
                        product.article +
                        " by Sana'a Kayum"
                      }
                      type="image/jpeg"
                      srcSet={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                        single.fields.file.url}?fm=jpg`}
                    />
                    <img
                      className="img-fluid"
                      itemProp="image"
                      alt={product.collectionName}
                      loading="lazy"
                      title={
                        product.collectionName +
                        " " +
                        product.article +
                        " by Sana'a Kayum"
                      }
                      src={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                        single.fields.file.url}?fm=jpg`}
                    />
                  </picture>
                </div>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
};

ProductImageGallerySlider.propTypes = {
  product: PropTypes.object
};

export default ProductImageGallerySlider;
