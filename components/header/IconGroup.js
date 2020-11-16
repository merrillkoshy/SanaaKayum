import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";

import { useHistory } from "react-router-dom";
import { logoutUser,loginUser } from "../../redux/actions/userActions";
import { deleteFromCart, resetCart,loadCart } from "../../redux/actions/cartActions";
import { resetWishlist,loadWishlist } from "../../redux/actions/wishlistActions";
import { resetCompare,loadCompare } from "../../redux/actions/compareActions";

import Link from "next/link";
import { Button } from "react-bootstrap";
import LoginModal from "../product/LoginModal";
const IconGroup = ({
  loadCart,
  loadCompare,
  loadWishlist,
  loginUser,
  userData,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  resetCart,
  resetCompare,
  resetWishlist,
  iconWhiteClass,
  logoutUser
}) => {
  const [loginModal, setloginModal] = useState(false);
  const initUname = (
    <Button className="interaction-button" onClick={() => setloginModal("true")}>
      <a>Login</a>
    </Button>
  );
  const initInteraction = (
    <ul>
      <li>
        <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/register"}>
          <a>Register</a>
        </Link>
      </li>
      <li></li>
    </ul>
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [uName, setUname] = useState(initUname);
  const [interaction, setInteraction] = useState(initInteraction);
  const { addToast } = useToasts();
  

  useEffect(() => {
    if (userData.user.firstName !== undefined) {
      setLoggedIn(true);

      setUname(
        <Link
              href={{
                pathname: `/my-account]`,
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
              resetCompare();
              resetCart();
              resetWishlist();
            }}
          >
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
              <a>Logout</a>
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: `/my-account]`,
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

  const history = useHistory();
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
              onClick={e => handleClick(e)}
            >
              <i className="pe-7s-search" />
            </button>
            <div className="search-content">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  history.push(
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
              </form>
            </div>
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
              <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/wishlist"}>
                <a>
                  <i className="pe-7s-like" />
                  <span className="count-style">
                    {wishlistData &&
                    wishlistData.length >= 1 &&
                    !wishlistData.some(item => item.unNull === "unNull")
                      ? wishlistData.length
                      : 0}
                  </span>
                </a>
              </Link>
            </div>
            <div className="same-style cart-wrap d-none d-lg-block">
              <button className="icon-cart" onClick={e => handleClick(e)}>
                <i className="pe-7s-shopbag" />
                <span className="count-style">
                  {cartData &&
                  cartData.length &&
                  !cartData.some(item => item.unNull === "unNull")
                    ? cartData.length
                    : 0}
                </span>
              </button>
              {/* menu cart */}
              <MenuCart
                cartData={cartData}
                uID={userData.user.entryID}
                deleteFromCart={deleteFromCart}
              />
            </div>
            <div className="same-style cart-wrap d-block d-lg-none">
              <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/cart"}>
                <a className="icon-cart">
                  <i className="pe-7s-shopbag" />
                  <span className="count-style">
                    {cartData &&
                    cartData.length &&
                    !cartData.some(item => item.unNull === "unNull")
                      ? cartData.length
                      : 0}
                  </span>
                </a>
              </Link>
            </div>
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
      <LoginModal 
      show={loginModal} 
      onHide={() => setloginModal(false)} 
      loadCart={loadCart}
      loadCompare={loadCompare}
      loadWishlist={loadWishlist}
      loginUser={loginUser}
      addtoast={addToast}/>
    </>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
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
    compareData: state.compareData,
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
    loadCompare: item => {
      dispatch(loadCompare(item));
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
    resetCompare: () => {
      dispatch(resetCompare());
    },
    resetWishlist: () => {
      dispatch(resetWishlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
