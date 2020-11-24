import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState,useRef } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import {Swiper,Controller} from "swiper";

const ProductImageGalleryLeftThumb = ({ product, thumbPosition }) => {
  // const [gallerySwiper, getGallerySwiper] = useState(null);
  // const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperRef = useRef(null);
  const thumbnailSwiperRef = useRef(null);

  // effect for swiper slider synchronize
  useEffect(() => {
    // if (
    //   gallerySwiper !== null &&
    //   gallerySwiper.controller &&
    //   thumbnailSwiper !== null &&
    //   thumbnailSwiper.controller
    // ) {
    //   gallerySwiper.controller.control = thumbnailSwiper;
    //   thumbnailSwiper.controller.control = gallerySwiper;
    // }
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
    
    if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
        
      }

  }, []);

  // swiper slider settings
  const gallerySwiperParams = {
    Swiper,
    modules: ['controller'],
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade"
  };

  const thumbnailSwiperParams = {
    Swiper,
    modules: [Controller],
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      1200: {
        slidesPerView: 4,
        direction: "vertical"
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      320: {
        slidesPerView: 4,
        direction: "horizontal"
      }
    }
  };

  return (
    <Fragment>
      <div className="row row-5">
        <div
          className={` ${
            thumbPosition && thumbPosition === "left"
              ? "col-xl-10 order-1 order-xl-2"
              : "col-xl-10"
          }`}
        >
          <div className="product-large-image-wrapper">
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}
            <LightgalleryProvider>
              <ReactIdSwiper {...gallerySwiperParams} ref={gallerySwiperRef}>
                {product.images &&
                  product.images.map((single, key) => {
                    return (
                      <div key={key}>
                        <LightgalleryItem
                          group="any"
                          src={`${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            single.fields.file.url}fm=jpg`}
                        >
                          <button>
                            <i className="pe-7s-expand1"></i>
                          </button>
                        </LightgalleryItem>
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
              </ReactIdSwiper>
            </LightgalleryProvider>
          </div>
        </div>
        <div
          className={` ${
            thumbPosition && thumbPosition === "left"
              ? "col-xl-2 order-2 order-xl-1"
              : "col-xl-2"
          }`}
        >
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            <ReactIdSwiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
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
            </ReactIdSwiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductImageGalleryLeftThumb.propTypes = {
  product: PropTypes.object,
  thumbPosition: PropTypes.string
};

export default ProductImageGalleryLeftThumb;
