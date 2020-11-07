import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";

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
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
                      Haute Couture
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/sk"}>
                      Corporate Clothing
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}>
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/lookbook"}>
                      Lookbook
                    </a>
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
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "#/"}>
                      Store location
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>
                      Contact
                    </a>
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
                    <a
                      href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/size-guide"}
                    >
                      Size guide
                    </a>
                  </li>
                  <li>
                    <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/delivery"}>
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL +
                        "/returns-and-exchanges"
                      }
                    >
                      Returns, Replacements & Exchanges
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL +
                        "/terms-and-conditions"
                      }
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        process.env.NEXT_PUBLIC_PUBLIC_URL + "/privacy-policy"
                      }
                    >
                      Privacy Policy
                    </a>
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
