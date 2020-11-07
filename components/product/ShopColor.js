import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import { Accordion, Card } from "react-bootstrap";

const ShopColor = ({ colors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  More Colors{"      "}{" "}
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {colors.map((color, key) => {
                      return (
                        <li key={key}>
                          <div className="sidebar-widget-list-left">
                            <button
                              onClick={e => {
                                getSortParams("color", color);
                                setActiveSort(e);
                              }}
                            >
                              <span className="checkmark" /> {color}{" "}
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
