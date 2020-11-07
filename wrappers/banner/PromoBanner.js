import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/sanaa-banner.json";
import BannerElevenSingle from "../../components/banner/BannerElevenSingle.js";

const BannerEleven = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return <BannerElevenSingle data={single} key={key} />;
          })}
      </div>
    </div>
  );
};

BannerEleven.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};
export default BannerEleven;
