import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

import clientMgr from "../../../constants/contentManager";
import { logoutUser,loginUser } from "../../../redux/actions/userActions";
import {  resetCart,loadCart } from "../../../redux/actions/cartActions";
import { resetWishlist,loadWishlist } from "../../../redux/actions/wishlistActions";

import Link from "next/link";
import { Button } from "react-bootstrap";
import LoginModal from "../../product/LoginModal";
const MobileNavMenu = ({
  loadCart,
  
  loadWishlist,
  loginUser,
  userData,
  resetCart,
  
  resetWishlist,
  logoutUser
}) => {
  const [loginModal, setloginModal] = useState(false);
  const initUname = (
    <Button className="loginButton" onClick={() => setloginModal(true)}>
      <a>Login</a>
    </Button>
  );
  
  const initInteraction = (
    <>
      <li className="menu-item-has-children">
        <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/register"}>
        <a>
          Register
        </a>
        </Link>
      </li>
      
    </>
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [uName, setUname] = useState(initUname);
  const [interaction, setInteraction] = useState(initInteraction);
  const { addToast } = useToasts();

  useEffect(() => {
    if (userData.user.firstName !== undefined) {
      setLoggedIn(true);

      setUname(
        <Fragment>
          
          <Link
          href={{
            pathname: `/my-account`,
            query: {
              userAccount: userData.user.firstName
            }
          }}
        >
          <a className="username-row">
          {"Hello, " + userData.user.firstName}
          </a>
          </Link>
          
          
          <hr />
        </Fragment>
      );

      setInteraction(
        <Fragment>
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
            <a 
              className="text-danger"
              
            >
              Logout
            </a>
            </Link>
          </li>
        </Fragment>
      );
    }
  }, [userData.user, isLoggedIn]);

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
      <li className="menu-item-has-children">
      {uName}
      </li>
      </ul>

      <ul>
        <li className="menu-item-has-children">
          <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/"}>
          <a>{"Home"}</a>
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/shop"}>
          <a>{"Shop"}</a>
          </Link>
        </li>

        <li>
          <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/lookbook"}>
          <a>
          {"Lookbook"}
          </a>
          </Link>
        </li>
        <li>
          <Link  href={process.env.NEXT_PUBLIC_DOMAIN + "/about"}>
          <a>
          {"About Us"}
          </a>
          </Link>
        </li>

        <li>
          <Link href={process.env.NEXT_PUBLIC_DOMAIN + "/contact"}>
          <a>
            {"Contact Us"}
          </a>
          </Link>
        </li>
      </ul>
      <div className="account-dropdown">
        <ul>{interaction}</ul>
      </div>
      <LoginModal 
      show={loginModal} 
      onHide={() => setloginModal(false)} 
      />
    </nav>
  );
};

MobileNavMenu.propTypes = {
  cartData: PropTypes.array,
  
  logoutUser: PropTypes.func,
  wishlistData: PropTypes.array
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
    },
    logoutUser: addToast => {
      dispatch(logoutUser(addToast));
    },
    resetCart: () => {
      dispatch(resetCart());
    },

    resetWishlist: () => {
      dispatch(resetWishlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavMenu);
