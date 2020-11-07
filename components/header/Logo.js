import PropTypes from "prop-types";
import React from "react";


const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <a href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
        <img alt="" src={process.env.NEXT_PUBLIC_PUBLIC_URL + imageUrl} />
      </a>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
