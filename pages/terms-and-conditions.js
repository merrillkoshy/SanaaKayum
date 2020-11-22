import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import TnCCtn from "../components/section-title/TnC";
import HeaderMeta from "../components/header/HeaderMeta";

const TermsAndConditions = ({  }) => {
  

  return (
    <Fragment>
      
      <HeaderMeta
        article={"Terms And Conditions - Sana'a Kayum"}
        title={"Terms And Conditions - Sana'a Kayum"}
        description={
          "These terms and conditions outline the rules and regulations for the use of SANAA KAYUM CLOTHING ART LLC's Website, located at https://sanaakayum.com"
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={""}
        color={"#000000"}
        
      />


      
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        

        {/* section title with text */}
        <TnCCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

TermsAndConditions.propTypes = {
  location: PropTypes.object
};

export default TermsAndConditions;
