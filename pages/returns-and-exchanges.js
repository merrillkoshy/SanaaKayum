import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import ReturnsCtn from "../components/section-title/Returns";

const Returns = ({  }) => {
  

  return (
    <Fragment>
      <MetaTags>
        <title>Haute Couture & High-Street Fashion - Sana'a Kayum</title>
        <meta
          name="description"
          content="Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        />
      </MetaTags>
      
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        

        {/* section title with text */}
        <ReturnsCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

Returns.propTypes = {
  location: PropTypes.object
};

export default Returns;