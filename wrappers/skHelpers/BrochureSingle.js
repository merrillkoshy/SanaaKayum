import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import SkPage from "../../components/section-title/SkPage";
import { isSafari } from "react-device-detect";

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
                <a
                  href={process.env.NEXT_PUBLIC_PUBLIC_URL + br.brochurePdf.fields.file.url}
                >
                  <img
                    itemProp="image"
                    alt={br.name}
                    loading="lazy"
                    title={br.name + " by SK Corporate Clothing"}
                    src={
                      !isSafari
                        ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                          br.brochureImage.fields.file.url
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            br.brochureImage.fields.file.url}?fm=jpg`
                    }
                  />
                </a>
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
