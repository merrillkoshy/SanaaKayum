import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";
import client from "../../constants/config";
import Link from "next/link";
import { connect } from "react-redux";

import { useToasts } from "react-toast-notifications";
import { loginUser } from "../../redux/actions/userActions";
import { loadCart } from "../../redux/actions/cartActions";
import { loadWishlist } from "../../redux/actions/wishlistActions";

const LoginModal = ({ loginUser, loadCart, loadWishlist, ...props }) => {
  const { addToast } = useToasts();

  const [loginError, setLoginError] = useState("");
  const checkUser = (eve, username, password, addToast) => {
    eve.preventDefault();
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

            loginUser(ent.fields, addToast, ent.sys.id);
            ent.fields["cartData"] === undefined
              ? loadCart([])
              : ent.fields["cartData"][0] === null
              ? loadCart([])
              : loadCart(ent.fields.cartData.flat());

            ent.fields["wishlistData"] === undefined ||
            ent.fields["wishlistData"][0] === null
              ? loadWishlist([])
              : loadWishlist(ent.fields.wishlistData.flat());
          }
        });
      })
      .then(() => {
        if (error) {
          return setLoginError(
            <Row className="text-danger">
              {"Incorrect username or password. Please try again"}
            </Row>
          );
        } else return props.onHide();
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    return () => {
      setLoginError("");
    };
  });

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hi there! Please Login to Sana'a Kayum
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="user-name"
                autoComplete="username"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="user-password"
                autoComplete="current-password"
                placeholder="Password"
              />
            </Form.Group>
            {loginError}
            <Form.Group controlId="signupLogin" className="ml-3">
              <Row>
                <Button
                  onClick={e => {
                    e.preventDefault();
                    checkUser(
                      e,
                      document.querySelector("input[name='user-name']").value,
                      document.querySelector("input[name='user-password']")
                        .value,
                      addToast
                    );
                  }}
                  className="loginButton"
                >
                  Login
                </Button>
              </Row>
              <Row className="mt-3">
                {`Lets revamp your wardrobe. `}
                <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/register`}>
                  <a
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    {" "}
                    Sign up here!
                  </a>
                </Link>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
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
export default connect(null, mapDispatchToProps)(LoginModal);
