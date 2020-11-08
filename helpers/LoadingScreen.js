import React from "react";

const LoadingScreen=()=> {
  return (<div className="sanaa-kayum-preloader-wrapper">
  <img
    alt="sanaa-kayum-splash"
    className="preloader"
    loading="eager"
    src={"/assets/img/splash.gif"}
  />
</div>)
}
export default LoadingScreen