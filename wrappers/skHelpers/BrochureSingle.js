import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import SkPage from "../../components/section-title/SkPage";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Link from "next/link";

const BrochureSingle = ({ brochure }) => {
  const content = () => {
    var els = [];
    els.push(<SkPage spaceBottomClass="pb-90" />);
    brochure.map((br, i) => {
      els.push(
        <Fragment>
          <div key={i} className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-img-2">
                <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + br.brochurePdf.fields.file.url}>
                <a
                  
                >
                  
                  <img
                    itemProp="image"
                    alt={br.name}
                    loading="lazy"
                    title={br.name + " by SK Corporate Clothing"}
                    src={
                      !(isSafari || isIE || isFirefox)
                        ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                          br.brochureImage.fields.file.url
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            br.brochureImage.fields.file.url}?fm=jpg`
                    }
                  />
                </a>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });

    return els;
  };
  return content();
};

BrochureSingle.propTypes = {
  brochure: PropTypes.array
};
const mapStateToProps = state => {
  return {
    brochure: state.brochuresData.brochures
  };
};
export default connect(mapStateToProps)(BrochureSingle);
