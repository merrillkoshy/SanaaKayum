import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LayoutOne from "../layouts/LayoutOne";
import SkPage from "../components/section-title/SkPage";
import BrochureSingle from "../wrappers/skHelpers/BrochureSingle";

const Sk = ({ brochure }) => {
  const [elems, setElems] = useState([]);
  useEffect(() => {
    setElems(brochure);
  }, [brochure.length]);
  return (
    <LayoutOne
      article={"SK™ by Sana'a Kayum® | Sana'a Kayum"}
      title={"SK™ by Sana'a Kayum® | Sana'a Kayum"}
      description={
        "Bespoke solutions for Corporate Clothing, Work-wear and Uniforms to represent YOUR brand identity in style and comfort."
      }
      image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={`${process.env.NEXT_PUBLIC_DOMAIN}/sk`}
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
                  <SkPage spaceBottomClass="pb-90" />

                  {elems &&
                    elems.map(br => {
                      return <BrochureSingle item={br} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};
const mapStateToProps = state => {
  return {
    brochure: state.brochuresData.brochures
  };
};
export default connect(mapStateToProps)(Sk);
