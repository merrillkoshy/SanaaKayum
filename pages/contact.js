import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import HeaderMeta from "../../components/header/HeaderMeta";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <HeaderMeta
        article={"Exquisite Wardrobe"}
        title={"Contact us | +971 52 333 1757 | Hello@SanaaKayum.com "}
        description={"Contact us | +971 52 333 1757 | Hello@SanaaKayum.com "}
        image={"https://sanaakayum.com/Assets/Sana'a_Kayum_inside_view_3.jpg"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={"https://sanaakayum.com/contact"}
        color={"#000000"}
      />

      <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + "/"}>
        Home
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10">
              <Map latitude="47.444" longitude="-122.176" />
            </div> */}
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <a href="tel:+971523331757">
                        <i className="fa fa-phone" />
                      </a>
                    </div>
                    <div className="contact-info-dec">
                      <span itemProp="telephone">
                        <a href="tel:+971523331757">+971 52 333 1757</a>
                      </span>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <a href="mailto:hello@sanaakayum.com">
                        <i className="fa fa-globe" />
                      </a>
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:hello@sanaakayum.com">
                          Hello@SanaaKayum.com
                        </a>
                      </p>
                      <p>
                        <a href="//sanaakayum.com">sanaakayum.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <a
                        itemProp="hasMap"
                        href="https://maps.google.com/maps?cid=15901352452706984030"
                        title="Let's go there!"
                      >
                        <i className="fa fa-map-marker" />
                      </a>
                    </div>
                    <div className="contact-info-dec">
                      <h3>
                        <a
                          itemProp="hasMap"
                          href="https://maps.google.com/maps?cid=15901352452706984030"
                          title="Let's go there!"
                        >
                          Boutique
                        </a>
                      </h3>
                      <p>209, Al Asmawi Bldg</p>
                      <p>Umm Al Sheif, Sheikh Zayed Rd.</p>
                      <p>Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <a
                        href="https://maps.google.com/maps?cid=15901352452706984030"
                        title="Walk-in !"
                      >
                        <i className="fa fa-map-marker" />
                      </a>
                    </div>
                    <div className="contact-info-dec">
                      <h3>
                        <a
                          href="https://www.google.com/maps/place/Sana'a+Kayum+Clothing+Art/@25.1180756,55.2065658,16.59z/data=!4m8!1m2!2m1!1ssana'a+kayum!3m4!1s0x3e5f6bc02f34c771:0x8a6a5f5c43028b56!8m2!3d25.1165067!4d55.2060011"
                          title="Walk-in !"
                        >
                          Walk-in Store
                        </a>
                      </h3>
                      <p>Opp. Lulu Hypermarket</p>
                      <p>Al Rabwah 1, Al Barsha 1</p>
                      <p>Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
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
              <div className="col-lg-8 col-md-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3061732889173!2d55.20128221500807!3d25.12533768392962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f731236970a37%3A0xdcacf3ce87e2e05e!2sSana&#39;a%20Kayum!5e0!3m2!1sen!2sae!4v1592681412866!5m2!1sen!2sae"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form
                    action="mailto:hello@sanaakayum.com"
                    className="contact-form-style"
                    method="post"
                    encType="text/plain"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="Name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="Email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="Subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="Message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
