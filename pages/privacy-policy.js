import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import PolicyCtn from "../components/section-title/PolicyCtn";

const PrivacyPolicy = ({  }) => {
  

  return (
    <Fragment>
      <MetaTags>
        <title>Privacy Policy - Sana'a Kayum</title>
        <meta
          name="description"
          content=" This Privacy Policy document contains types of information that is collected and recorded by Haute Couture &amp; High-Street Fashion - Sana'a Kayum and how we use it."
        />
      </MetaTags>
     
      <LayoutOne headerTop="visible">
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
