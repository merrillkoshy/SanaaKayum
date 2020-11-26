import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import BrochureSingle from "../wrappers/skHelpers/BrochureSingle";
import HeaderMeta from "../components/header/HeaderMeta";

const Sk = () => {
  return (
    <LayoutOne
      article={"SK™ by Sana'a Kayum® | Sana'a Kayum"}
      title={"SK™ by Sana'a Kayum® | Sana'a Kayum"}
      description={
        "Bespoke solutions for Corporate Clothing, Work-wear and Uniforms to represent YOUR brand identity in style and comfort."
      }
      image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={""}
      color={"#000000"}
      headerTop="visible"
    >
      {/* breadcrumb */}

      <div className="blog-area pt-100 pb-100 sk">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mr-20">
                <div className="row">
                  {/* blog posts */}
                  <BrochureSingle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default Sk;
