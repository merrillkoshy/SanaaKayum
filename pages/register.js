import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { loginUser } from "../redux/actions/userActions";
import { loadCart } from "../redux/actions/cartActions";
import { loadWishlist } from "../redux/actions/wishlistActions";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { connect } from "react-redux";

import { useToasts } from "react-toast-notifications";
import client from "../constants/config";
import clientMgr from "../constants/contentManager";
import LayoutOne from "../layouts/LayoutOne";
import { useRouter } from "next/router";

const LoginRegister = ({ loginUser, loadCart, loadWishlist, userData }) => {
  const { addToast } = useToasts();
  const router = useRouter();
  const [getNextIndex, setNextIndex] = useState(0);
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [validated, setValidated] = useState(false);
  const [contentfulErrorHit, setContentfulErrorHit] = useState(false);
  useEffect(() => {
    client
      .getEntries({
        content_type: "users"
      })
      .then(entries => {
        setNextIndex(entries.items.length);
      });
  }, [validated]);

  const loginAfterSuccess = (username, password) => {
    let error;
    client
      .getEntries({
        content_type: "users"
      })
      .then(entries => {
        entries.items.forEach(ent => {
          if (
            ent.fields.username === username &&
            ent.fields.password === password
          ) {
            error = false;
            loginUser(ent.fields, addToast, ent.sys.id, ent.fields.loginInfo);
            ent.fields["cartData"] === undefined ||
            ent.fields["cartData"]["en-US"] == null
              ? loadCart([])
              : loadCart(ent.fields.cartData);
            ent.fields["wishlistData"] === undefined ||
            ent.fields["wishlistData"]["en-US"] == null
              ? loadWishlist([])
              : loadWishlist(ent.fields.wishlistData);
          }
        });
      })
      .then(() => {
        router.push("/");
      })
      .catch(err => console.error(err));
  };
  const createEntry = () => {
    clientMgr
      .then(environment =>
        environment.createEntry("users", {
          fields: {
            id: {
              "en-US": getNextIndex + 1
            },
            username: {
              "en-US": document.querySelector("input[name='username']").value
            },
            password: {
              "en-US": document.querySelector("input[name='user-password']")
                .value
            },
            firstName: {
              "en-US": document.querySelector("input[name='firstName']").value
            },
            lastName: {
              "en-US": document.querySelector("input[name='lastName']").value
            },
            mobile: {
              "en-US": document.querySelector("input[name='mobile']").value
            },
            facebook: {
              "en-US": document.querySelector("input[name='facebook']").value
            },
            instagram: {
              "en-US": document.querySelector("input[name='instagram']").value
            },
            email: {
              "en-US": document.querySelector("input[name='email']").value
            },
            addressDetails: {
              "en-US": {
                country: country,
                region: region,
                addressLine: addressLine
              }
            }
          }
        })
      )

      .then(entry => {
        return entry.publish();
      })
      .catch(err => {
        setContentfulErrorHit(true);
        console.error(err);
        addToast(" Username already taken! Please choose another username", {
          appearance: "error",
          autoDismiss: true
        });
      })
      .finally(() => {
        if (!contentfulErrorHit) {
          addToast(
            " Welcome " +
              document.querySelector("input[name='username']").value +
              " !",
            {
              appearance: "success",
              autoDismiss: true
            }
          );
          loginAfterSuccess(
            document.querySelector("input[name='username']").value,
            document.querySelector("input[name='user-password']").value
          );
        }
      });
  };

  return (
    <Fragment>
      <LayoutOne
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={`${process.env.NEXT_PUBLIC_DOMAIN}/register`}
        color={"#000000"}
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* breadcrumb */}

        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <Form noValidate validated={validated}>
                        <Form.Row className={"mb-3"}>
                          <h1>Welcome to Sana'a Kayum !</h1>
                          <p>
                            Join us and keep track of your orders. Share your
                            contact information so that we can assist you better
                            at delivering your products.
                          </p>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomFN"
                          >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="First name"
                              name="firstName"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please enter your first name
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomLN"
                          >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                              name="lastName"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please enter your last name
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                              <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                required
                              />
                              <Form.Control.Feedback type="invalid">
                                Please choose a username.
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomEmail"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              placeholder="johndoe@yourdomain.com"
                              name="email"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please enter your email address{" "}
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomMobile"
                          >
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                              required
                              type="tel"
                              placeholder="+971XXXXXXXXX"
                              pattern="(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{7,20}$"
                              name="mobile"
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Please use country code eg:(+971XXXXXXXXX)
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md="4"
                            lg="10"
                            controlId="validationCustomAddr"
                          >
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Street Address"
                              name="addressLine"
                              onChange={event =>
                                setAddressLine(event.target.value)
                              }
                            />

                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md="4"
                            lg="5"
                            controlId="validationCustomCn"
                          >
                            <Form.Label>Country</Form.Label>

                            <CountryDropdown
                              value={country}
                              id="country"
                              onChange={val => selectCountry(val)}
                            />
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            lg="5"
                            controlId="validationCustomRg"
                          >
                            <Form.Label>State/Region</Form.Label>

                            <RegionDropdown
                              country={country}
                              id="region"
                              value={region}
                              onChange={val => selectRegion(val)}
                            />
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomPw"
                          >
                            <Form.Label>Choose a Password</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="user-password"
                              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}"
                              placeholder="Password should contain atleast eight characters of
                                atleast one uppercase, one lowercase and a number"
                            />

                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                              Password should contain atleast eight characters
                              of atleast one uppercase, one lowercase and a
                              number. Please do not put any special characters.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Row>

                        <div className="billing-info">
                          Please enter your Socials
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text>
                                <i className="fa fa-facebook" />
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              className="mb-0"
                              aria-label="facebook"
                              name="facebook"
                              placeholder="Your Facebook handle"
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text>
                                <i className="fa fa-instagram" />
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              className="mb-0"
                              aria-label="instagram"
                              name="instagram"
                              placeholder="Your Instagram handle"
                            />
                          </InputGroup>
                        </div>
                        <div className="button-box">
                          <button
                            onClick={event => {
                              const form = event.currentTarget;

                              if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                              } else if (
                                document.querySelector(
                                  "#country option:checked"
                                ).value === "" ||
                                document.querySelector("#region option:checked")
                                  .value === ""
                              ) {
                                event.preventDefault();
                                event.stopPropagation();
                                addToast(
                                  " Please select your Shipping Country and Region",
                                  {
                                    appearance: "error",
                                    autoDismiss: true
                                  }
                                );
                              } else {
                                setValidated(true);
                                event.preventDefault();
                                createEntry();
                              }
                            }}
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
  loginUser: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cartData: state.cartData,
    wishlistData: state.wishlistData,

    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userDetails, addToast, entryID) => {
      dispatch(loginUser(userDetails, addToast, entryID));
    },
    loadCart: item => {
      dispatch(loadCart(item));
    },

    loadWishlist: item => {
      dispatch(loadWishlist(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
