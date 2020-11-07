import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useToasts } from "react-toast-notifications";
import { uploadToContentful } from "../pages/[userAccount]";

function ChangeAddressModal(props) {
  const { userdata } = props;
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const { addToast } = useToasts();
  const uID = userdata.entryID;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Current Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-lg-12">
          <div className="billing-info mb-20">
            <label>Street Address</label>
            <input
              className="billing-address"
              placeholder="Street Address"
              type="text"
              name="addressLine"
              onChange={event => setAddressLine(event.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="billing-select mb-20">
            <label>State / County</label>
            <CountryDropdown
              value={country}
              onChange={val => selectCountry(val)}
            />

            <label>Town / City</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={val => selectRegion(val)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-success"
          onClick={() => {
            uploadToContentful(
              "addressDetails",
              { country: country, region: region, addressLine: addressLine },
              uID,
              addToast
            );
          }}
        >
          Confirm Address
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeAddressModal;
