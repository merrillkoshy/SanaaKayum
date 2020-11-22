import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Swiper from "react-id-swiper";

import Skeleton from "react-loading-skeleton";

import Card from "react-bootstrap/Card";

import Link from "next/link";
import { useRouter } from "next/router";

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
  return (
    <Fragment>
      <Swiper {...swiperParams}>
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
                        process.env.NEXT_PUBLIC_PUBLIC_URL +
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
                            src={`/assets/categories/careless.png`}
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
      </Swiper>
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
