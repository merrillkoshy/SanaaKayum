import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import clientMgr from "../../../constants/contentManager";
import { logoutUser,loginUser } from "../../../redux/actions/userActions";
import {  resetCart,loadCart } from "../../../redux/actions/cartActions";
import { resetWishlist,loadWishlist } from "../../../redux/actions/wishlistActions";
import { resetCompare,loadCompare } from "../../../redux/actions/compareActions";
import Link from "next/link";
import { Button } from "react-bootstrap";
import LoginModal from "../../product/LoginModal";
const MobileNavMenu = ({
  loadCart,
  loadCompare,
  loadWishlist,
  loginUser,
  userData,
  cartData,
  wishlistData,
  compareData,
  resetCart,
  resetCompare,
  resetWishlist,
  logoutUser
}) => {
  const [loginModal, setloginModal] = useState(false);
  const initUname = (
    <Button className="skButton" onClick={() => setloginModal("true")}>
      <a>Login</a>
    </Button>
  );
  
  const initInteraction = (
    <>
      <li className="menu-item-has-children">
        <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/register"}>
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
          <div className="row">{"Hello, " + userData.user.firstName}</div>
          <hr></hr>
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
              resetCompare();
              resetCart();
              resetWishlist();
            }}
          >
            <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
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
      {uName}

      <ul>
        <li className="menu-item-has-children">
          <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/"}>
          <a>{"Home"}</a>
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/shop"}>
          <a>{"Shop"}</a>
          </Link>
        </li>

        <li>
          <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/lookbook"}>
          <a>
            {"Lookbook"}
          </a>
          </Link>
        </li>
        <li>
          <Link  href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/about"}>
          <a>
            {"About Us"}
          </a>
          </Link>
        </li>

        <li>
          <Link href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/contact"}>
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
      loadCart={loadCart}
      loadCompare={loadCompare}
      loadWishlist={loadWishlist}
      loginUser={loginUser}
      addtoast={addToast}/>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  logoutUser: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavMenu);
