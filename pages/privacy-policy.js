import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import PolicyCtn from "../components/section-title/PolicyCtn";
import HeaderMeta from "../components/header/HeaderMeta";

const PrivacyPolicy = ({  }) => {
  

  return (
    <Fragment>
      
      <LayoutOne
      article={"Exquisite Wardrobe"}
      title={"Haute Couture & High-Street Fashion"}
      description={
        "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
      }
      image={"https://sanaakayum.com/Assets/Sana'a_Kayum_inside_view_3.jpg"}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={"https://sanaakayum.com/contact"}
      color={"#000000"}
      headerTop="visible"
      headerContainerClass="container-fluid"
      headerPaddingClass="header-padding-2"
    >
        {/* breadcrumb */}
        

        {/* section title with text */}
        <PolicyCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

PrivacyPolicy.propTypes = {
  location: PropTypes.object
};

export default PrivacyPolicy;
