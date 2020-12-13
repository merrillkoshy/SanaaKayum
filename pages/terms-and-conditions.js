import PropTypes from "prop-types";
import React, { Fragment } from "react";

import LayoutOne from "../layouts/LayoutOne";

import TnCCtn from "../components/section-title/TnC";

const TermsAndConditions = ({}) => {
  return (
    <Fragment>
      <LayoutOne
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/terms-and-conditions`}
        color={"#000000"}
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* breadcrumb */}

        {/* section title with text */}
        <TnCCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};


export default TermsAndConditions;
