import PropTypes from "prop-types";
import React, { Fragment } from "react";
import PaymentResponseHeader from "../wrappers/header/PaymentResponseHeader";
import Footer from "../wrappers/footer/Footer";
import Head from "next/head";

const PaymentResponseLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass
}) => {
  return (
    <Fragment>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vp" />
      </Head>
      <PaymentResponseHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <Footer
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

PaymentResponseLayout.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default PaymentResponseLayout;
