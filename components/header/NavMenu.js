import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
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
          {/* Edit - only must-use comps
          <li>
            <a href={process.env.NEXT_PUBLIC_DOMAIN + "/shop-grid-standard"}>
              {strings["collection"]}
            </a>
          </li>*/}
          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/lookbook"}>
              <a>{"Lookbook"}</a>
            </Link>
          </li>
          <li>
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/about"}>
              <a>
                {"About Us"}
                {/* {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )} */}
              </a>
            </Link>
            {/* <ul className="submenu">
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/cart"}>
                  {strings["cart"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/checkout"}>
                  {strings["checkout"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/wishlist"}>
                  {strings["wishlist"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/compare"}>
                  {strings["compare"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/my-account"}>
                  {strings["my_account"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/login-register"}>
                  {strings["login_register"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/about"}>
                  {strings["about_us"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/contact"}>
                  {strings["contact_us"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/not-found"}>
                  {strings["404_page"]}
                </a>
              </li>
            </ul> */}
          </li>
          {/* <li>
            <a href={process.env.NEXT_PUBLIC_DOMAIN + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </a>
            <ul className="submenu">
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/blog-standard"}>
                  {strings["blog_standard"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/sk"}>
                  {strings["blog_no_sidebar"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </a>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_DOMAIN + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </a>
              </li>
            </ul>
          </li> */}
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
