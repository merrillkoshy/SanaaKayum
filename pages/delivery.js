import PropTypes from "prop-types";
import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import DeliveryCtn from "../components/section-title/Delivery";

const Delivery = ({}) => {
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
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/delivery`}
        color={"#000000"}
        headerTop="visible"
      >
        {/* breadcrumb */}

        {/* section title with text */}
        <DeliveryCtn spaceTopClass="pt-20" spaceBottomClass="pb-95" />
      </LayoutOne>
    </Fragment>
  );
};

Delivery.propTypes = {
  location: PropTypes.object
};

export default Delivery;
