import PropTypes from "prop-types";
import React from "react";


const CtaOne = ({ spaceTopClass, backgroundImage }) => {
  return (
    <div className={`save-money-area ${spaceTopClass ? spaceTopClass : ""}`}>
      <div className="container">
        <div
          className="bg-img pt-100 pb-100"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_PUBLIC_URL + backgroundImage})`
          }}
        >
          <div className="save-money-content">
            <h2>Shop and save money</h2>
            <div className="save-money-btn">
              <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop-grid-standard"}>
                Buy $97.09
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaOne.propTypes = {
  backgroundImage: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CtaOne;
