import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";

import { useHistory } from "react-router-dom";
import { logoutUser, loginUser } from "../../redux/actions/userActions";
import {
  deleteFromCart,
  resetCart,
  loadCart
} from "../../redux/actions/cartActions";
import {
  resetWishlist,
  loadWishlist
} from "../../redux/actions/wishlistActions";

import Link from "next/link";
import { Button, Modal, InputGroup, FormControl, Form } from "react-bootstrap";
import LoginModal from "../product/LoginModal";
import { useRouter } from "next/router";
const IconGroup = ({
  loadCart,

  loadWishlist,
  loginUser,
  userData,
  cartData,
  wishlistData,

  deleteFromCart,
  resetCart,

  resetWishlist,
  iconWhiteClass,
  logoutUser
}) => {
  const [loginModal, setloginModal] = useState(false);
  const initUname = (
    <Button
      className="interaction-button"
      onClick={() => setloginModal("true")}
    >
      <a>Login</a>
    </Button>
  );
  const initInteraction = (
    <ul>
      <li>
        <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/register"}>
          <a>Register</a>
        </Link>
      </li>
      <li></li>
    </ul>
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [uName, setUname] = useState(initUname);
  const [interaction, setInteraction] = useState(initInteraction);
  const { addToast } = useToasts();

  useEffect(() => {
    if (userData.user.firstName !== undefined) {
      setLoggedIn(true);

      setUname(
        <Link
          href={{
            pathname: `/my-account`,
            query: {
              userAccount: userData.user.firstName
            }
          }}
        >
          <a className="interaction-button">{`Hello, ${userData.user.firstName}`}</a>
        </Link>
      );
      setInteraction(
        <ul>
          <li
            onClick={() => {
              logoutUser(addToast);
              setLoggedIn(false);
              setUname(initUname);
              setInteraction(initInteraction);

              resetCart();
              resetWishlist();
            }}
          >
            <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
              <a>Logout</a>
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: `/my-account`,
                query: {
                  userAccount: userData.user.firstName
                }
              }}
            >
              <a>{`${userData.user.firstName}'s Account`}</a>
            </Link>
          </li>
        </ul>
      );
    }
  }, [userData.user]);

  const router = useRouter();
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <>
      <div className="row">
        <div
          className={`header-right-wrap ${
            iconWhiteClass ? iconWhiteClass : ""
          }`}
        >
          <div className="same-style header-search d-none d-lg-block">
            <button
              aria-label="search-button"
              className="search-active"
              onClick={() => setSmShow(true)}
            >
              <i className="pe-7s-search" />
            </button>
          </div>
          <div className="same-style account-setting d-lg-block">
            <button
              className="account-setting-active"
              onClick={e => handleClick(e)}
            >
              <i className="pe-7s-user-female" />
            </button>
            <div className="account-dropdown">{interaction}</div>
          </div>

          <Fragment>
            <div className="same-style header-wishlist">
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/wishlist"}>
                <a>
                  <i className="pe-7s-like" />
                  <span className="count-style">
                    {wishlistData && wishlistData.length >= 1
                      ? wishlistData.length
                      : 0}
                  </span>
                </a>
              </Link>
            </div>
            <div className="same-style cart-wrap ">
              <button className="icon-cart" onClick={() => setShow(true)}>
                <i className="pe-7s-shopbag" />
                <span className="count-style">
                  {cartData && cartData.length ? cartData.length : 0}
                </span>
              </button>
              {/* menu cart */}
            </div>
            {/* <div className="same-style cart-wrap d-block d-lg-none">
              <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/cart"}>
                <a className="icon-cart">
                  <i className="pe-7s-shopbag" />
                  <span className="count-style">
                    {cartData &&
                    cartData.length 
                      ? cartData.length
                      : 0}
                  </span>
                </a>
              </Link>
            </div> */}
            <div
              className="same-style mobile-off-canvas d-block d-lg-none"
              style={{ zIndex: 1 }}
            >
              <button
                aria-label="search-button"
                className="mobile-aside-button"
                onClick={() => triggerMobileMenu()}
              >
                <i className="pe-7s-menu" />
              </button>
            </div>
          </Fragment>
        </div>
      </div>
      <div className="row">
        <div className="col text-right ">{uName}</div>
      </div>
      {/* Login Modal */}
      <LoginModal
        show={loginModal}
        onHide={() => setloginModal(false)}
        loadCart={loadCart}
        loadWishlist={loadWishlist}
        loginUser={loginUser}
        addtoast={addToast}
      />
      {/* MenuCart Modal */}
      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="menu-cart"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {uName ? `${userData.user.firstName}'s ` : `Your `} Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MenuCart
            cartData={cartData}
            uID={userData.user.entryID}
            deleteFromCart={deleteFromCart}
          />
        </Modal.Body>
      </Modal>
      {/* Search Modal */}
      <Modal
      className="search-modal"
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="search-modal"
        
      >
        <Modal.Body className="py-1 px-2" >
          <div className="search-content">
            <InputGroup>
              <Form
              style={{width:"100%",display:"flex"}}
                onSubmit={e => {
                  e.preventDefault();
                  router.push(
                    "/shop?search=" +
                      document.querySelector("#searchHome").value
                  );
                }}
              >
                <FormControl
                  placeholder="Search..."
                  id="searchHome"
                  aria-label="search-area"
                  aria-describedby="search-area"
                />
              <InputGroup.Append>
                <Button className="button-search">
                  <i className="pe-7s-search" />
                </Button>
              </InputGroup.Append>
              </Form>
            </InputGroup>
            {/* <form
                onSubmit={e => {
                  e.preventDefault();
                  router.push(
                    "/shop?search=" +
                      document.querySelector("#searchHome").value
                  );
                }}
              >
                <input type="text" id="searchHome" placeholder="Search" />
                <button
                  aria-label="search-button"
                  type="submit"
                  className="button-search"
                >
                  <i className="pe-7s-search" />
                </button>
              </form> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,

  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  logoutUser: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
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
    },
    logoutUser: addToast => {
      dispatch(logoutUser(addToast));
    },
    deleteFromCart: (item, addToast, uId) => {
      dispatch(deleteFromCart(item, addToast, uId));
    },
    resetCart: () => {
      dispatch(resetCart());
    },
    resetWishlist: () => {
      dispatch(resetWishlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
