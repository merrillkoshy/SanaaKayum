import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <span itemProp="telephone">
                <a href="tel:+971523331757">+971 52 333 1757</a>
              </span>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:hello@sanaakayum.com">
                <span itemProp="email">Hello@SanaaKayum.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="//twitter.com/SKClothingart">
          <i className="fa fa-twitter" /> SKClothingart
        </a>
        <a href="//instagram.com/sanaa_kayum/">
          <i className="fa fa-instagram" /> sanaa_kayum
        </a>
        <a href="//facebook.com/SanaaKayum">
          <i className="fa fa-facebook" /> SanaaKayum
        </a>
        <a href="//pinterest.com" title="Pinterest">
          <i className="fa fa-pinterest"></i>sanaakayumhc
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
