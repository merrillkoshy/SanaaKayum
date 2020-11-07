import PropTypes from "prop-types";
import React from "react";

const DeliveryCtn = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h1>Delivery</h1>
          <ol className="text-left">
            <li>
              After you have placed your order through WhatsApp, and finalized
              the payment method and other details of your purchase with our
              sales associates, it will be sent to our back office and
              production unit for processing. Once your order is dispatched, our
              delivery partner will contact you to arrange for immediate
              delivery to your chosen location.{" "}
            </li>
            <li>
              If you have opted for cash on delivery, please ensure that you
              have kept the cash ready beforehand to avoid any delays and
              inconvenience at the doorstep. In the event that the parcel is
              undeliverable the first time, our delivery partner will contact
              you again before arranging for a second delivery attempt.{" "}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

DeliveryCtn.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default DeliveryCtn;
