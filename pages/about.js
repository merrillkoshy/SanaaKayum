import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import SectionTitleWithText from "../components/section-title/SanaaKayumIntro";

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
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/about`}
        color={"#000000"}
        headerTop="visible"
      >
        {/* breadcrumb */}

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
