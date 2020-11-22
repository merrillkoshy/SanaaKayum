import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import SizeGuideTable from "../components/section-title/SizeGuideTable";
import HeaderMeta from "../components/header/HeaderMeta";

const Returns = ({ location }) => {
  

  return (
    <Fragment>
      
    <HeaderMeta
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={""}
        color={"#000000"}
        
      />
    
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        

        {/* section title with text */}
        <SizeGuideTable spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

Returns.propTypes = {
  location: PropTypes.object
};

export default Returns;
