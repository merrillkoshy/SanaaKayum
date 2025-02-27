import React,{ useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { postPurchase } from "../redux/actions/cartActions";

import { useRouter } from "next/router";
import PaymentResponseLayout from "../layouts/PaymentResponseLayout";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import PurchasedProductGrid from "../wrappers/product/PurchasedProductGrid";

import Link from "next/link";

const PayBySk = ({ postPurchase }) => {
  const router = useRouter();
  const { pa } = router.query;
  const { ui } = router.query;

  const [date, setDate] = useState("");

  const [recentPurchases, setRecentPurchases] = useState([]);
  const [cartDescription, setCartDescription] = useState("");

  useEffect(() => {
    setDate(window.atob(pa));
    const orderData = JSON.parse(localStorage.getItem("Initiate"));
    if (orderData) {
      setRecentPurchases(orderData.cartData),
        setCartDescription(orderData.cart_description),
        postPurchase(window.atob(ui));
    }
    if (!orderData) router.push("/shop");

    return () => {
      localStorage.removeItem("Initiate");
    };
  }, [typeof window !== undefined]);

  return (
    <Fragment>
      <PaymentResponseLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        <Container>
          <Container className="mt-10">
            <Table striped bordered hover variant="dark" size="sm">
              <tbody>
                <tr>
                  <th>Payment Mode:</th>
                  <td>{`COD`}</td>
                </tr>
                <tr>
                  <th>Order Reference:</th>
                  <td>{cartDescription && cartDescription}</td>
                </tr>
                <tr>
                  <th>Order Placed at:</th>
                  <td>{date}</td>
                </tr>

                <tr>
                  <th>Delivery within:</th>
                  <td>
                    <strong>4 working days</strong>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <Link href="/shop">
                      <Button className="pull-right">Back to shop</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <Row className={`d-flex`}>
            <Col>
              {recentPurchases && (
                <PurchasedProductGrid
                  columnClass="col"
                  sliderClassName={"mt-5"}
                  products={recentPurchases}
                  spaceBottomClass="mb-25"
                />
              )}
            </Col>
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
export default connect(null, mapDispatchToProps)(PayBySk);
