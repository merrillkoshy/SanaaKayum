import PropTypes from "prop-types";
import React from "react";


const FooterCopyright = ({ footerLogo, spaceBottomClass }) => {
  return (
    <div className={`copyright ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="footer-logo">
        <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
          <img
            alt=""
            src={process.env.NEXT_PUBLIC_PUBLIC_URL + footerLogo}
            loading="lazy"
          />
        </a>
      </div>
      <p>
        © 2020{" "}
        <a href="/" rel="noopener noreferrer" target="_blank">
          Sana'a Kayum Clothing Art LLC
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FooterCopyright;
