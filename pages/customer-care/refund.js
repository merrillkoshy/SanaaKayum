import { useRouter } from "next/router";
import Steps from "antd/lib/steps";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { STATUS_ENTER } from "rc-motion/lib/interface";
import Image from "antd/lib/image";
import List from "antd/lib/list";
import { isSafari, isIE, isFirefox } from "react-device-detect";
import Skeleton from "react-loading-skeleton";
import uuid from "uuid/v4";

const { Step } = Steps;

const Refund = ({ products, user }) => {
  const [stepped, setStepped] = useState(0);
  const [product, setProduct] = useState(false);

  const router = useRouter();
  const { t } = router.query;

  const [stepContent, setStepContent] = useState("");
const [reason, setReason]=useState("")
const reasonsArray=[
    "I did not receive the product in the promised time.",
    "I got the wrong product.",
    "I got the wrong size.",
    "I simply did not like the product",
    "Other"
]
  useEffect(() => {
    
    const tr_ref = window.atob(t);

    const { s } = router.query;
    const sno = window.atob(s);
    setProduct(
      products.filter(product => {
        if (product.serialNumber === sno) return product;
      })[0]
      );
       (product)? stepCase(0):setProduct(
        products.filter(product => {
          if (product.serialNumber === sno) return product;
        })[0]
        );
  }, [typeof window !== undefined,product]);
  
  const UserData = ({ product }) => {
    console.log(product);
    return (
      <Form>
        <Form.Group controlId="formBasicEmail" className="col-3 mb-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue={user.user.email}
          />
          {/* "Ill take care of yo " + tr_ref */}
        </Form.Group>

        <Form.Group controlId="productToReturn" className="col-3 mb-4">
          <Row>
            <Col>
              <List.Item
                className="purchased-product-card p-4 mx-auto"
                key={product.description + " | " + product.collectionName}
              >
                <Row>
                  <Image
                    itemProp="image"
                    className="puchased-image"
                    alt={product.collectionName}
                    title={
                      product.collectionName +
                      " " +
                      product.article +
                      " by Sana'a Kayum"
                    }
                    src={
                      !(isSafari || isIE || isFirefox)
                        ? `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.images[0].fields.file.url}`
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            product.images[0].fields.file.url}?fm=jpg`
                    }
                  />
                </Row>

                <List.Item.Meta
                  className="pt-2"
                  title={product.article}
                  description={product.description}
                />
              </List.Item>
            </Col>
          </Row>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            stepCase(1);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  };
  const UserReason = ({ product }) => {
    console.log(product);
    return (
      <Form>
          <Form.Label>Please help us in understanding the reason for return.</Form.Label>
          <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choose from the below options</Form.Label>
    <Form.Control as="select" onChange={e=>setReason(e.target.value)}>
    <option key={uuid()}>--Select Value--</option>
          {reasonsArray.map(
                  result=>{return <option key={uuid()}>{result}</option>} 
              )}
     
    </Form.Control>
  </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            stepCase(1);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  };
  const stepCase = step => {
    switch (step) {
      case 0:
        setStepContent(<UserData product={product} />);
        setStepped(0);
        break;
      case 1:
        setStepContent(<UserReason />);
        setStepped(1);
        break;
      case 2:
        setStepContent("Verifying us");
        setStepped(2);
        break;

      default:
        break;
    }
  };
  
  return (
    <>
    
      <Container className="pt-80">
        <Steps current={stepped}>
          <Step title="Verifying User" description="This is a description." />
          <Step title="Verifying Myself" description="This is a description." />
          <Step title="Verifying Us" description="This is a description." />
        </Steps>
        <Container className="pt-100 mx-auto">
          <div className="steps-content">{stepContent}</div>
        </Container>
      </Container>
    </>
  );
};
const mapStateToProps = state => {
  return {
    products: state.productData.products,
    user: state.userData
  };
};
export default connect(mapStateToProps, null)(Refund);
