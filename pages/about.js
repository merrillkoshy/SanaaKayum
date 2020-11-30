import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../components/section-title/SanaaKayumIntro";
import HeaderMeta from "../components/header/HeaderMeta";

const About = ({}) => {
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
      url={"https://sanaakayum.com/about"}
      color={"#000000"}
      headerTop="visible"
    >
    >
        {/* breadcrumb */}

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
