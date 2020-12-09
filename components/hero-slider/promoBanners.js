import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { isSafari, isIE, isFirefox } from "react-device-detect";
import Link from "next/link";
import OwlCarousel from "react-owl-carousel3";

import Skeleton from "react-loading-skeleton";

const PBanners = ({ pBanners, sliderClassName }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(true);
  });
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    dots: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    navText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
    ]
  };

  return (
    <Fragment>
      {pBanners.length && display ? (
        <OwlCarousel {...options} className="owl-theme" nav>
          {pBanners.map(function(pb, i) {
            return (
              <div
                key={i}
                className={`slider-height-5 d-flex align-items-center bg-img ${
                  sliderClassName ? sliderClassName : ""
                }`}
                style={{
                  backgroundImage: !(isSafari || isIE || isFirefox)
                    ? `url(${pb.image.fields.file.url})`
                    : `url(${pb.image.fields.file.url}?fm=jpg)`
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                      <div className="slider-content-6 slider-animated-1 text-center">
                        <h1 className="animated">{pb.promotionName}</h1>
                        <p className="animated">{pb.about}</p>
                        <div className="slider-btn-5 btn-hover">
                          <Link
                            href={
                              pb.redirect
                                ? pb.redirect
                                : process.env.NEXT_PUBLIC_DOMAIN + `/shop`
                            }
                          >
                            <a className="animated">{pb.buttonText}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      ) : (
        <Skeleton height={200} />
      )}
    </Fragment>
  );
};
PBanners.propTypes = {
  pBanners: PropTypes.array,
  sliderClassName: PropTypes.string
};

export default PBanners;
