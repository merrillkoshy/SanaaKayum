import PropTypes from "prop-types";
import React, { Fragment } from "react";


import { isSafari, isIE, isFirefox } from "react-device-detect";
import Link from "next/link";


const BrochureSingle = ({ item }) => {
  
  return (
    <Fragment>
      
      <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link href={"https:/" + item.brochurePdf.fields.file.url}>
              <a>
                <img
                  itemProp="image"
                  alt={item.name}
                  loading="lazy"
                  title={item.name + " by SK Corporate Clothing"}
                  src={
                    !(isSafari || isIE || isFirefox)
                      ? item.brochureImage.fields.file.url
                      : `${item.brochureImage.fields.file.url}?fm=jpg`
                  }
                />
              </a>
            </Link>
          </div>
        </div>
      </div>;
    </Fragment>
  );
};

BrochureSingle.propTypes = {
  brochure: PropTypes.array
};

export default BrochureSingle;
