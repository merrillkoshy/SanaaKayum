import PropTypes from "prop-types";
import React from "react";

const SkPage = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>SK™ by Sana'a Kayum® </h5>
          <p>
            SK™ by Sana'a Kayum® is where we offer bespoke solutions for
            Corporate Clothing, Work-wear and Uniforms to represent YOUR brand
            identity in style and comfort. Each aspect of your order, from
            Order-Request until Final-Delivery is worked upon with meticulous
            detail to follow the same signature quality standards that were set
            by the parent brand Sana'a Kayum® in Haute Couture & High Street
            Fashion. With over 20 years of clothing expertise, we have
            improvised and adapted, bringing in the most advanced developments
            on clothing techniques and fabric assignment. Have a look at what we
            offer, browse through our options below.
          </p>
        </div>
      </div>
    </div>
  );
};

SkPage.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SkPage;
