import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { isSafari, isMobile } from "react-device-detect";
import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import HomePageProductSlider from "../../components/hero-slider/HomePageProductSlider";

const ProductSlider = props => {
  const { sliders } = props;
  const { products } = props;

  const [comp, setComp] = useState("");
  useEffect(
    () =>
      setComp(
        sliders &&
          sliders.map(slider => {
            return (
              <div key={slider.id} className="slider-area px-lg-5 px-xs-1">
                <div className="slider-active-2 nav-style-3 px-lg-5 px-xs-1">
                  {slider.featureSlide ? (
                    <>
                      <div
                        className="slider-content-2 slider-animated-1 text-center"
                        style={
                          !isMobile
                            ? {
                                background:
                                  "url(" +
                                  slider.sliderMedia.fields.file.url +
                                  ") no-repeat center center",
                                backgroundSize: "contain"
                              }
                            : {
                                background:
                                  "url(" +
                                  slider.sliderMedia.fields.file.url +
                                  ") no-repeat",
                                backgroundPosition: "50% 2%",
                                backgroundSize: "cover"
                              }
                        }
                      >
                        <h1 className="animated mb-xs-0 mb-sm-0 mb-md-0">
                          {slider.featureSlideData.text}
                        </h1>

                        <div className="slider-btn-5 btn-hover">
                          <Link
                            className="animated p-sm-3"
                            href={
                              slider.featureSlideData.action
                                ? slider.featureSlideData.action
                                : process.env.RAZZLE_PUBLIC_URL + `/shop`
                            }
                          >
                            {slider.featureSlideData.button}
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <Row className="mx-auto">
                    <Col>
                      {isMobile ? (
                        <h4>{slider.sliderHeading}</h4>
                      ) : (
                        <h2>{slider.sliderHeading}</h2>
                      )}{" "}
                    </Col>
                    <Col className="text-right">
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "black"
                        }}
                      >
                        <Link
                          href={
                            process.env.RAZZLE_PUBLIC_URL +
                            `/shop?search=` +
                            slider.filterValue
                          }
                        >
                          View All
                        </Link>
                      </Button>
                    </Col>
                  </Row>

                  <HomePageProductSlider
                    swiperParams={params}
                    products={getProducts(slider)}
                    limit={slider.limit}
                    spaceBottomClass="mb-25"
                    sliderClassName="swiper-slide"
                  />
                </div>
              </div>
            );
          })
      ),
    [props.sliders]
  );

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

  return comp ? comp : "";
};

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    sliders: state.sliderData.sliders
  };
};

export default connect(mapStateToProps)(ProductSlider);
