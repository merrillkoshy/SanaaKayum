import PropTypes from "prop-types";
import React from "react";

const ReturnsCtn = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Rules and Conditions for</h5>
          <h1>Returns, Replacements & Exchanges</h1>
          <ol className="text-left">
            <li>
              You are entitled if the items you have received is damaged,
              different from what you ordered, of the wrong size or specs, or if
              you have simply changed your mind (in certain cases).
            </li>
            <li>
              If you have changed your mind, items where you have opted for
              major alterations and customizations at the time of purchase will
              not be applicable.
            </li>
            <li>
              Returns and exchanges can only be made within 14 days from the
              date of delivery.
            </li>
            <li>
              All returned items must be in a good condition with original tags
              attached.
            </li>
            <li>
              For cash transactions, we may take up to 7 days to refund the cash
              after verifying the condition of the product.
            </li>
            <li>
              You may opt for refund through bank transfer or collecting it
              personally from the store.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

ReturnsCtn.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default ReturnsCtn;
