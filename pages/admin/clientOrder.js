import { useRouter } from "next/router";
import React,{ useState, useEffect } from "react";
import client from "../../constants/config";
import PurchasedProductGrid from "../../wrappers/product/PurchasedProductGrid";
import { Container, Row, Col } from "react-bootstrap";

import Swiper from "react-id-swiper";

const ClientOrder = () => {
  const router = useRouter();
  const { cr } = router.query;
  const { ci } = router.query;
  var transactions = [];
  const [order, getOrder] = useState([]);
  const [name, getName] = useState("");
  const [email, getEmail] = useState("");
  const [phone, getPhone] = useState("");
  const [address, getAddress] = useState("");
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  useEffect(() => {
    client
      .getEntry(ci)
      .then(entry => {
        getName(`${entry.fields.firstName} ${entry.fields.lastName}`);
        getEmail(`${entry.fields.email}`);
        getPhone(`${entry.fields.mobile}`);
        getAddress(
          `${entry.fields.addressDetails.addressLine}, ${entry.fields.addressDetails.region}, ${entry.fields.addressDetails.country}`
        );
        transactions = entry.fields.transactionsData;
      })
      .then(() => {
        const result = transactions.filter(tr => {
          if (tr.data.cart_id == cr) {
            return tr;
          }
        });
        // getOrder(result.purchaseItems);
        getOrder(result[0].purchaseItems);
      })
      .catch((error)=>{
        console.error(error)
      });
  }, [ci]);

  return (
    <Container className="mt-50">
      <Row>
        <Col>Customer :</Col>
        <Col>{name}</Col>
      </Row>
      <Row>
        <Col>Email :</Col>
        <Col>{email}</Col>
      </Row>
      <Row>
        <Col>Phone :</Col>
        <Col>{phone}</Col>
      </Row>
      <Row>
        <Col>Address :</Col>
        <Col>{address}</Col>
      </Row>
      <Swiper {...settings}>
        <PurchasedProductGrid products={order} spaceBottomClass="mb-25" />
      </Swiper>
    </Container>
  );
};

export default ClientOrder;
