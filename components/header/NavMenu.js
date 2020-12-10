import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a>{"Home"}</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
              <a> {"Shop"}</a>
            </Link>
          </li>

          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/lookbook"}>
              <a>{"Lookbook"}</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/about"}>
              <a>{"About Us"}</a>
            </Link>
          </li>

          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/contact"}>
              <a>{"Contact Us"}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default NavMenu;
