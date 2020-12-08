import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import { Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";

const HeaderOne = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

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

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""}`}
    >
      {/* <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"
        } header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}> */}
      {/* header top */}
      {/* <HeaderTop borderStyle={borderStyle} />
        </div>
      </div> */}

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-3 col-lg-2 col-4">
              {/* header logo */}
              <div className="logo text-center logo-hm5 my-2">
                <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
                  <a
                    className="sticky-none"
                    href={process.env.NEXT_PUBLIC_DOMAIN + "/"}
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
                    href={process.env.NEXT_PUBLIC_DOMAIN + "/"}
                  >
                    {scroll > headerTop ? (
                      <img
                        alt=""
                        src="/assets/img/logo/logo-black.png"
                        
                        loading="lazy"
                      />
                    ) : (
                    <img
                    alt=""
                    
                    src="/assets/img/logo/logo-gold.png"
                    loading="lazy"
                  />)
                    }
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-2 d-lg-none d-xl-none my-auto text-center px-2 shop-mobile">
              {/* Shop Button for mobile screens */}
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
                <a><strong>SHOP</strong></a>
              </Link>
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* Icon group */}
              <IconGroup />
            </div>
            {/* <div className="col-2"></div> */}
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

HeaderOne.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderOne;
