import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import Link from "next/link";

// import SKChatbot from "../../components/chatbot/SKChatbot";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <FooterCopyright
              footerLogo="/assets/img/logo/logo-black.png"
              spaceBottomClass="mb-30"
            />
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-15"
              }`}
            >
              <div className="footer-title">
                <h3>EXPLORE</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
                    <a>
                      Haute Couture
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/sk"}>
                    <a>
                      Corporate Clothing
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}>
                    <a>
                      Shop
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/lookbook"}>
                    <a>
                      Lookbook
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link  href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
                    <a>
                      About us
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://maps.google.com/maps?cid=15901352452706984030">
                    <a >
                      Store location
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>
                    <a>
                      Contact
                    </a>
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+971523331757">+971 52 333 1757</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-15"
              }`}
            >
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/size-guide"}>
                    <a
                      
                    >
                      Size guide
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/delivery"}>
                    <a >
                      Delivery
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL +
                        "/returns-and-exchanges"
                      }>
                    <a
                      
                    >
                      Returns, Replacements & Exchanges
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL +
                        "/terms-and-conditions"
                      }>
                    <a
                      
                    >
                      Terms and Conditions
                    </a>
                    </Link>
                  </li>
                  <li>
                    <Link  href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL + "/privacy-policy"
                      }>
                    <a
                     
                    >
                      Privacy Policy
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-15"
              }`}
            >
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="//facebook.com/SanaaKayum">
                      <i className="fa fa-facebook" /> SanaaKayum
                    </a>
                  </li>
                  <li>
                    <a href="//instagram.com/sanaa_kayum/">
                      <i className="fa fa-instagram" /> sanaa_kayum
                    </a>
                  </li>
                  <li>
                    <a href="//pinterest.com/sanaakayumhc/">
                      <i className="fa fa-pinterest-p" /> sanaakayumhc
                    </a>
                  </li>
                  <li>
                    <a href="//twitter.com/SKClothingart">
                      <i className="fa fa-twitter" /> SKClothingart
                    </a>
                  </li>
                  <li>
                    <a href="//linkedin.com/company/sanaa-kayum/">
                      <i className="fa fa-linkedin" /> company/sanaa-kayum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <SKChatbot /> */}
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FooterOne;
