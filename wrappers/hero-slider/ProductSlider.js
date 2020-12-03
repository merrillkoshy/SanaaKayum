import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { isSafari, isIE, isFirefox, isMobile } from "react-device-detect";
import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
import HomePageProductSlider from "../../components/hero-slider/HomePageProductSlider";

const ProductSlider = props => {
  const { sliders } = props;
  const { products } = props;

  const [comp, setComp] = useState("");

  const getProducts = sliders => {
    const key = sliders.filterKey;
    const tagList=[]
    switch (key) {
      case "tags":
          products.forEach(item => {
            item[key]?.forEach((tag,i)=>{
              if(tag === sliders.filterValue) {
                tagList.push(item)
              }
              
            })
        });

        return [...new Set(tagList)].slice(
          0,
          sliders.limit ? sliders.limit : tagList.length
        );

        break;

      default:
        const productList = products.filter((items, i) => {
          if (items[key] === sliders.filterValue) return items;
        });
        return [...new Set(productList)].slice(
          0,
          sliders.limit ? sliders.limit : productList.length
        );
        break;
    }
  };

  const params = {
    effect: "fade",
    loop: false,
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
                                : process.env.NEXT_PUBLIC_PUBLIC_URL + `/shop`
                            }
                          >
                            <a>{slider.featureSlideData.button}</a>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <Row className="mx-auto my-2 row">
                    <Col>
                      {isMobile ? (
                        <h4>{slider.sliderHeading}</h4>
                      ) : (
                        <h2>{slider.sliderHeading}</h2>
                      )}{" "}
                    </Col>
                    <Col className="text-right">
                      <Button
                      className="landing-product-button"
                        
                      >
                        <Link
                          href={
                            process.env.NEXT_PUBLIC_PUBLIC_URL +
                            `/shop?search=` +
                            slider.filterValue
                          }
                        >
                          <a>View All</a>
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
  return comp ? comp : "";
};

const mapStateToProps = state => {
  return {
    products: state.productData.products,
    sliders: state.sliderData.sliders
  };
};

export default connect(mapStateToProps)(ProductSlider);
