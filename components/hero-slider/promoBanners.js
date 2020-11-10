import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { isSafari } from "react-device-detect";
import Link from "next/link";

const PBanners = ({ pBanners, sliderClassName }) => {
  const BannersSlider = () =>
    pBanners &&
    pBanners.map(function(pb, i) {
      return (
        <div
          key={i}
          className={`slider-height-5 d-flex align-items-center bg-img ${
            sliderClassName ? sliderClassName : ""
          }`}
          style={{
            backgroundImage: !isSafari
              ? `url(${process.env.NEXT_PUBLIC_PUBLIC_URL +
                  pb.image.fields.file.url})`
              : `url(${process.env.NEXT_PUBLIC_PUBLIC_URL +
                  pb.image.fields.file.url}?fm=jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="slider-content-6 slider-animated-1 text-center">
                  <h1 className="animated">{pb.promotionName}</h1>
                  <p className="animated">{pb.about}</p>
                  <div className="slider-btn-5 btn-hover">
                    <Link href={
                        pb.redirect
                          ? pb.redirect
                          : process.env.NEXT_PUBLIC_PUBLIC_URL + `/shop`
                      }>
                    <a
                      className="animated"
                      
                    >
                      {pb.buttonText}
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-6"></div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <Fragment>
      <BannersSlider />
    </Fragment>
  );
};
PBanners.propTypes = {
  pBanners: PropTypes.array,
  sliderClassName: PropTypes.string
};

export default PBanners;
