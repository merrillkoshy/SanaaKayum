import PropTypes from "prop-types";
import React from "react";

import HeaderSocial from "./sub-components/HeaderSocial";
import NavMenu from "./NavMenu";
import Link from "next/link";

const OffcanvasMenu = ({ activeState, getActiveState }) => {
  return (
    <div className={`clickable-mainmenu ${activeState ? "inside" : ""}`}>
      <div className="clickable-mainmenu-icon">
        <button
          aria-label="menu-button"
          className="clickable-mainmenu-close"
          onClick={() => getActiveState(false)}
        >
          <span className="pe-7s-close"></span>
        </button>
      </div>
      <div className="side-logo">
        <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
        <a>
          <img
            alt=""
            src={
              process.env.NEXT_PUBLIC_PUBLIC_URL + "/assets/img/logo/logo-black.png"
            }
            loading="lazy"
          />
        </a>
        </Link>
      </div>
      {/* nav menu*/}
      <NavMenu sidebarMenu={true} />

      {/* header social */}
      <HeaderSocial />
    </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func
};

export default OffcanvasMenu;
