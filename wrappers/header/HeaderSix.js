import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import OffcanvasMenu from "../../components/header/OffcanvasMenu";
import { connect } from "react-redux";
import Link from "next/link";

const HeaderSix = ({ user, layout, headerPaddingClass, headerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [offcanvasActive, setOffcanvasActive] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const getActiveState = state => {
    setOffcanvasActive(state);
  };

  return (
    <header
      className={`header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7 ${
        headerBgClass ? headerBgClass : ""
      } ${headerPaddingClass ? headerPaddingClass : ""} ${
        scroll > 20 ? "stick" : ""
      }`}
    >
      <div className={layout === "container-fluid" ? layout : "container"}>
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-none d-lg-block">
            <div className="clickable-menu clickable-mainmenu-active">
              <button
                onClick={() => {
                  setOffcanvasActive(true);
                }}
              >
                <i className="pe-7s-menu" />
              </button>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            {/* header logo */}
            <div className="logo text-center logo-hm5">
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a
                className="sticky-none"
                
              >
                <img
                  alt=""
                  src="/assets/img/logo/logo-gold.png"
                  loading="lazy"
                />
              </a>
                </Link>
                <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a
                className="sticky-block"
                
              >
                <img
                  alt=""
                  src="/assets/img/logo/logo-black.png"
                  loading="lazy"
                />
              </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 d-none d-lg-block"></div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            {/* Icon group */}
            <IconGroup user={user} iconWhiteClass="header-right-wrap-white" />
          </div>
        </div>
      </div>
      {/* offcanvas menu */}
      {/* <OffcanvasMenu
        activeState={offcanvasActive}
        getActiveState={getActiveState}
      /> */}
      {/* mobile menu */}
      {/* <MobileMenu 
      activeState={offcanvasActive}
      getActiveState={getActiveState}
      user={user} /> */}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userData
  };
};
HeaderSix.propTypes = {
  headerBgClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  layout: PropTypes.string
};

export default connect(mapStateToProps, null)(HeaderSix);
