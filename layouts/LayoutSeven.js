import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderSix from "../wrappers/header/HeaderSix";
import Footer from "../wrappers/footer/Footer";

const LayoutSeven = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix layout="container-fluid" />
      {children}
      <Footer spaceTopClass="pt-100" spaceBottomClass="pb-70" />
    </Fragment>
  );
};

export default LayoutSeven;

LayoutSeven.propTypes = {
  children: PropTypes.any
};
