import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass }) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              {/* <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
              </Nav.Item> */}
            </Nav>
           
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
