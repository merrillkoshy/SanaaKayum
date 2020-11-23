import React from "react";

const LoadingScreen=()=> {
  return (<div className="sanaa-kayum-preloader-wrapper">
  <img
    alt="sanaa-kayum-splash"
    className="preloader"
    loading="eager"
    src={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/img/splash.gif`}
  />
</div>)
}
export default LoadingScreen