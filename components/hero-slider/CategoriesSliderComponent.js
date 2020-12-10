import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import Skeleton from "react-loading-skeleton";
import Card from "react-bootstrap/Card";

import Link from "next/link";
import { useRouter } from "next/router";
import OwlCarousel from "react-owl-carousel3";
import { isMobile, isTablet } from "react-device-detect";

const CategoriesSliderComponent = ({
  swiperParams,
  products,
  limit,
  sliderClassName,
  spaceBottomClass
}) => {
  const { isFallback } = useRouter();
  const carelessArray = [
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
    "Maxi Gown"
  ];
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
        items: 3
      },
      460: {
        items: 4
      },
      600: {
        items: 5
      },
      850: {
        items: 7
      },
      1000: {
        items: 8
      },
      1200: {
        items: 10
      },
      1300: {
        items: 12
      },
      1600: {
        items: 14
      }
    },
    mouseDrag: true,
    navText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
    ]
  };

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  });

  return (
    <Fragment>
      {display ? (
        <OwlCarousel {...options} className="owl-theme" nav>
          {isFallback ? (
            <Skeleton count={5} />
          ) : (
            products &&
            products.map((product, i) => {
              return (
                <div
                  key={i}
                  className={`col ${sliderClassName ? sliderClassName : ""}`}
                >
                  <Card style={{ width: "130px", border: "none" }}>
                    <Card.Body className="p-3">
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_DOMAIN +
                          `/shop?search=` +
                          product
                        }
                      >
                        <a>
                          {!carelessArray.includes(product) ? (
                            <Card.Img
                              variant="top"
                              src={`/assets/categories/${product.replace(
                                /\s/g,
                                "%20"
                              )}.png`}
                              onError={e => {
                                e.target.onerror = null;
                                e.target.src = `/assets/categories/placeholder.png`;
                              }}
                            />
                          ) : (
                            <Card.Img
                              variant="top"
                              src={`/assets/categories/Careless.png`}
                              onError={e => {
                                e.target.onerror = null;
                                e.target.src = `/assets/categories/placeholder.png`;
                              }}
                            />
                          )}
                        </a>
                        {/* <Card.Text>
                  <strong>sanaa_kayum</strong> Shop {product} #{product}{" "}
                  #sanaakayum
                </Card.Text> */}
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          )}
        </OwlCarousel>
      ) : (
        <>
        <Skeleton circle={true} height={100} width={100} />
        <Skeleton circle={true} height={100} width={100} />
        <Skeleton circle={true} height={100} width={100} />
        </>
      )}
    </Fragment>
  );
};

CategoriesSliderComponent.propTypes = {
  addToCart: PropTypes.func,

  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,

  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

export default CategoriesSliderComponent;
