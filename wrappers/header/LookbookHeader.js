import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import Link from "next/link";

const LookbookHeader = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".lookbook-header");
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
    <header className={`lookbook-header ${scroll > 10 ? "shrink" : ""}`}>
      <div className={layout === "container-fluid" ? layout : "container"}>
        <div className={`row `}>
          <div className="col-xl-3 col-lg-8 d-lg-block">
            {/* header logo */}
            <div className="logo text-center logo-hm5">
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a
                className="sticky-none"
                
              >
                <img alt="" src="/assets/img/logo/logo-gold.png" />
              </a>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a
                className="sticky-block"
                href={process.env.NEXT_PUBLIC_DOMAIN + "/"}
              >
                <img alt="" src="/assets/img/logo/logo-gold.png" />
              </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 d-none d-lg-block">
            {/* Nav menu */}
            <NavMenu />
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            {/* Icon group */}
            <IconGroup />
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

LookbookHeader.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default LookbookHeader;
