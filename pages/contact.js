import PropTypes from "prop-types";
import React, { useEffect } from "react";
import LayoutOne from "../layouts/LayoutOne";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const Contact = ({}) => {
  const { addToast } = useToasts();
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.google.com/recaptcha/api.js?render=" +
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    script.async = true;
const footer=document.querySelector(".footer-area")
footer.appendChild(script);
  },[typeof document!==undefined]);
  return (
    <LayoutOne
      article={"Exquisite Wardrobe"}
      title={"Contact us | +971 52 333 1757 | Hello@SanaaKayum.com "}
      description={"Contact us | +971 52 333 1757 | Hello@SanaaKayum.com "}
      image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={`${process.env.NEXT_PUBLIC_DOMAIN}/contact`}
      color={"#000000"}
      headerTop="visible"
    >
      {/* breadcrumb */}

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
                width="100%"
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
                <Form
                  onSubmit={e => {
                    e.preventDefault();

                    const formData = new FormData(e.target),
                      formDataObj = Object.fromEntries(formData.entries());

                    grecaptcha.ready(function() {
                      grecaptcha
                        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
                          action: "submit"
                        })
                        .then(function(token) {
                          const headers = {
                            "Access-Control-Allow-Headers":
                              "Content-Type, Authorization",
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type": "application/json",
                            Token: token
                          };
                          const data = {
                            google: {
                              secret:
                                process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
                              response: token
                            },
                            formDataObj
                          };
                          axios
                            .post("/api/recaptchaCheck", data, headers)
                            .then(response => {
                              if (response.status === 200)
                                addToast("Email Sent !", {
                                  appearance: "success",
                                  autoDismiss: true
                                });
                            });
                        });
                    });
                  }}
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                  />

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Subject"
                      name="subject"
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="textarea" />
                  </Form.Group>
                  <Button type="submit" className="skButton">
                    SEND
                  </Button>
                </Form>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
