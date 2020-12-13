import PropTypes from "prop-types";
import React from "react";


const FooterCopyright = ({ footerLogo, spaceBottomClass }) => {
  const year=new Date().getFullYear()
  return (
    <div className={`copyright ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="footer-logo">
        <a href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
          <img
            alt=""
            src={ footerLogo}
            loading="lazy"
          />
        </a>
      </div>
      <p>
        © {`${year} - ${(year+1).toString().substr(-2)}  `}
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
