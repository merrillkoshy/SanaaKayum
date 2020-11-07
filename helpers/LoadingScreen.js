import React from "react";

export default function LoadingScreen(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return (
        <div className="sanaa-kayum-preloader-wrapper">
          <img
            alt="sanaa-kayum-splash"
            className="preloader"
            loading="eager"
            src={"/assets/img/splash.gif"}
          />
        </div>
      );
    }
    return null;
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  }
  return null;
}
