import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import { Button } from "react-bootstrap";

const ShopCategories = ({  categories, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list-left">
        <Button className="sk-button" onClick={e => {
              getSortParams("category", "");
              setActiveSort(e); 
              
            }}> <i className="fa fa-close">Clear Selections</i></Button>
      </div>
      <div className="sidebar-widget-list mt-20">
                {categories ? (
                  <ul>
                    {categories.map((category, key) => {
                      return (
                        <li key={key}>
                          <div className="sidebar-widget-list-left">
                          <button
                                onClick={e => {
                                  getSortParams("category", category);
                                  setActiveSort(e);
                                }}
                              >
                                <span className="checkmark" />
                                {category}
                              </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  "No categories found"
                )}
              </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
