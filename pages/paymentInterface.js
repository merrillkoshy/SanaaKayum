import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import clientMgr from "../constants/contentManager";
import { postPurchase } from "../redux/actions/cartActions";
import Link from "next/link";
import { Button, Container, Row, Table, Col } from "react-bootstrap";
import PaymentResponseLayout from "../layouts/PaymentResponseLayout";
import PurchasedProductGrid from "../wrappers/product/PurchasedProductGrid";
import Swiper from "react-id-swiper";

const paymentInterface = ({ cartItems, user, postPurchase }) => {
  const [paymentResult, setPaymentResult] = useState("");
  const [recentPurchases, setRecentPurchases] = useState(cartItems);
  const [paymentResponseCode, setPaymentResponseCode] = useState("");

  const userData = user.user;
  
  const getPayDate = inDate => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const date = new Date(inDate);
    const today = new Date(inDate);
    let formatted;
    !inDate === "today"
      ? (formatted = `${date.getDate()}${" "} ${
          monthNames[date.getMonth()]
        }${" "} ${date.getFullYear()}`)
      : (formatted = `${today.getDate()}${" "} ${
          monthNames[today.getMonth()]
        }${" "} ${today.getFullYear()}`);
    return formatted;
  };
  useEffect(() => {
    if (localStorage.getItem("Initiate")) {
      const checkTrans = JSON.parse(localStorage.getItem("Initiate"));
      const headers = {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        Authorization: process.env.NEXT_PUBLIC_SVK,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Token: userData?.entryID
      };
      axios
        .post(
          "/api/queryTrans",
          {
            check: {
              profile_id: process.env.NEXT_PUBLIC_MID,
              tran_ref: checkTrans.tran_ref
            },
            cart: cartItems
          },
          {
            headers: headers
          }
        )
        .then(response => {
          localStorage.removeItem("Initiate");
          setPaymentResult(response.data.payment_result);
          setPaymentResponseCode(response.data.payment_result.response_code);

          const transactionResponse = {
            ...response,
            ...{ purchaseItems: cartItems }
          };
          clientMgr
            .then(environment => environment.getEntry(userData.entryID))
            .then(entry => {
              if (entry.fields["transactionsData"] === undefined) {
                entry.fields["transactionsData"] = {
                  "en-US": [transactionResponse]
                };
              } else {
                entry.fields["transactionsData"]["en-US"].push(
                  transactionResponse
                );
              }
              if (response.data.payment_result.response_code === "0") {
                postPurchase(userData.entryID);
                entry.fields.cartData["en-US"] = null;
              }
              return entry.update();
            })
            .then(entry => {
              entry.publish();
            });
        })
        .catch(error => {
          console.error(error);
        });
    }
  });

  return (
    <Fragment>
      
      <PaymentResponseLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        <Container>
        <Container className="mt-50">
                    <Table striped bordered hover variant="dark" size="sm">
                      <tbody>
                        <tr>
                          <th>Payment Status:</th>
                          <td>{paymentResult?.response_status}</td>
                        </tr>
                        <tr>
                          <th>Result</th>
                          <td>{paymentResult?.response_message}</td>
                        </tr>
                        <tr>
                          <th>Order Placed at:</th>
                          <td>
                            {paymentResult
                              ? getPayDate(paymentResult?.transaction_time)
                              : getPayDate("today")}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Container>

          <Row className={`d-flex`}>
            {paymentResponseCode === "0" ? (
              <>
                <Col>
                  
                    <PurchasedProductGrid
                      columnClass="col"
                      products={recentPurchases}
                      spaceBottomClass="mb-25"
                    />
                  
                </Col>
                <Col>
                  
                  <Link href="/shop">
                    <Button className="justify-content-md-center ml-40">
                      Back to shop
                    </Button>
                  </Link>
                </Col>
              </>
            ) : (
              <>
                <Container className="mt-150">
                  <Table>
                    <tbody>
                      <tr>
                        <th>Payment Status:</th>
                        <td>{paymentResult?.response_status}</td>
                      </tr>
                      <tr>
                        <th>Result</th>
                        <td>{paymentResult?.response_message}</td>
                      </tr>
                      <tr>
                        <th>Order Placed at:</th>
                        <td>
                          {paymentResult
                            ? getPayDate(paymentResult?.transaction_time)
                            : getPayDate("today")}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
                <Link href="/shop">
                  <Button className="justify-content-md-center ml-40">
                    Back to shop
                  </Button>
                </Link>
              </>
            )}
          </Row>
        </Container>
      </PaymentResponseLayout>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    postPurchase: uID => {
      dispatch(postPurchase(uID));
    }
  };
};
const mapStateToProps = state => {
  return {
    user: state.userData,
    cartItems: state.cartData,
    currency: state.currencyData
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(paymentInterface);
