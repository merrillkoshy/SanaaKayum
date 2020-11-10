import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import BrochureSingle from "../wrappers/skHelpers/BrochureSingle";

const Sk = () => {
  

  return (
    <Fragment>
      <MetaTags>
        <title>SK™ by Sana'a Kayum® | Sana'a Kayum</title>
        <meta
          name="description"
          content="Bespoke solutions for Corporate Clothing, Work-wear and Uniforms to represent YOUR brand identity in style and comfort."
        />
      </MetaTags>
      
      <LayoutOne headerTop="visible">
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
    </Fragment>
  );
};



export default Sk;
