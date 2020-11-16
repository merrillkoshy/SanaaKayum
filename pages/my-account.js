import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../layouts/LayoutOne";
import HeaderMeta from "../components/header/HeaderMeta";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import clientMgr from "../constants/contentManager";
import { useRouter } from "next/router";
import ChangeAddressModal from "../helpers/changeAddressModal";

export const uploadToContentful = (toEditField, value, uID, addToast) => {
  clientMgr
    .then(environment => environment.getEntry(uID))

    .then(entry => {
      entry.fields[toEditField] = { "en-US": value };
      ;
      return entry.update();
    })
    .then(entry => {
      return entry.publish();
    })
    .finally(
      addToast(toEditField + " changed successfully!", {
        appearance: "success",
        autoDismiss: true
      })
    );
};

const MyAccount = ({  user }) => {
  const [invalid, setInvalid] = useState("d-none");
  const router = useRouter();
  const { userAccount } = router.query;

  const { addToast } = useToasts();
  const [modalShow, setModalShow] = useState(false);
  const RegexExp = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,8}\w+/;
  const userData = user.user;
  const uID = userData.entryID;
  const changePassword = newPassword => {
    ;
    userData.password !== newPassword
      ? uploadToContentful("password", newPassword, uID, addToast)
      : addToast("Still the old password? Its a keeper !", {
          appearance: "error",
          autoDismiss: true
        });
  };

  return (
    <Fragment>
      <HeaderMeta
        article={"Exquisite Wardrobe"}
        title={`${userAccount}'s Account`}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={`/${userAccount}`}
        color={"#000000"}
        
      />
    

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Edit your account information{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                              <h5>{userData.firstName}'s Details</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    defaultValue={userData.firstName}
                                    name="firstName"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    defaultValue={userData.lastName}
                                    name="lastName"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input
                                    type="email"
                                    defaultValue={userData.email}
                                    name="email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input
                                    type="text"
                                    defaultValue={userData.mobile}
                                    name="mobile"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Username</label>
                                  <input
                                    type="text"
                                    defaultValue={userData.username}
                                    name="username"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-info">
                              <ul>
                                {userData.facebook ? (
                                  <li>
                                    <i className="fa fa-facebook" />{" "}
                                    {userData.facebook}
                                  </li>
                                ) : (
                                  ""
                                )}
                                {userData.instagram ? (
                                  <li>
                                    <i className="fa fa-instagram" />{" "}
                                    {userData.instagram}
                                  </li>
                                ) : (
                                  ""
                                )}
                              </ul>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button
                                  onChange={e => {
                                    e.preventDefault();
                                    document.querySelector(
                                      "input[name='firstName']"
                                    ).value !== userData.firstName
                                      ? uploadToContentful(
                                          "firstName",
                                          document.querySelector(
                                            "input[name='firstName']"
                                          ).value,
                                          uID,
                                          addToast
                                        )
                                      : "";
                                    document.querySelector(
                                      "input[name='lastName']"
                                    ).value !== userData.lastName
                                      ? uploadToContentful(
                                          "lastName",
                                          document.querySelector(
                                            "input[name='lastName']"
                                          ).value,
                                          uID,
                                          addToast
                                        )
                                      : "";
                                    document.querySelector(
                                      "input[name='email']"
                                    ).value !== userData.email
                                      ? uploadToContentful(
                                          "email",
                                          document.querySelector(
                                            "input[name='email']"
                                          ).value,
                                          uID,
                                          addToast
                                        )
                                      : "";
                                    document.querySelector(
                                      "input[name='mobile']"
                                    ).value !== userData.mobile
                                      ? uploadToContentful(
                                          "mobile",
                                          document.querySelector(
                                            "input[name='mobile']"
                                          ).value,
                                          uID,
                                          addToast
                                        )
                                      : "";
                                    document.querySelector(
                                      "input[name='username']"
                                    ).value !== userData.username
                                      ? uploadToContentful(
                                          "username",
                                          document.querySelector(
                                            "input[name='username']"
                                          ).value,
                                          uID,
                                          addToast
                                        )
                                      : "";
                                  }}
                                  type="submit"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                              <h5>Your Password</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password</label>
                                  <input name="new-password" type="password" />
                                  <span className={`text-danger ${invalid}`}>
                                    Password should contain eight characters of
                                    atleast one uppercase, one lowercase and a
                                    number
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Password Confirm</label>
                                  <input
                                    name="confirm-password"
                                    type="password"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button
                                  onClick={e => {
                                    e.preventDefault();
                                    if (
                                      RegexExp.test(
                                        document.querySelector(
                                          "input[name='new-password']"
                                        ).value
                                      ) &&
                                      document.querySelector(
                                        "input[name='new-password']"
                                      ).value ===
                                        document.querySelector(
                                          "input[name='confirm-password']"
                                        ).value
                                    ) {
                                      setInvalid("d-none");

                                      changePassword(
                                        document.querySelector(
                                          "input[name='new-password']"
                                        ).value
                                      );
                                    } else {
                                      setInvalid("d-block");
                                    }
                                  }}
                                  type="submit"
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>3 .</span> Modify your address book entries{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Address Book Entries</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    {userData.addressDetails ? (
                                      <>
                                        <p>
                                          {userData.addressDetails.addressLine}
                                        </p>
                                        <p>
                                          {userData.addressDetails.region},
                                          {userData.addressDetails.country}
                                        </p>
                                      </>
                                    ) : (
                                      <button
                                        onClick={() => setModalShow(true)}
                                        className="addAddress btn-primary"
                                      >
                                        Add Address
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  {userData.addressDetails ? (
                                    <div className="entries-edit-delete text-center">
                                      <button
                                        onClick={() => setModalShow(true)}
                                        className="edit"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => {
                                          uploadToContentful(
                                            "addressDetails",
                                            "",
                                            uID,
                                            addToast
                                          );
                                        }}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="entries-edit-delete text-center">
                                      <button className="edit" disabled>
                                        Edit
                                      </button>
                                      <button disabled>Delete</button>
                                    </div>
                                  )}
                                </div>
                                <ChangeAddressModal
                                  show={modalShow}
                                  onHide={() => setModalShow(false)}
                                  userdata={userData}
                                />
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.userData
  };
};
export default connect(mapStateToProps)(MyAccount);
