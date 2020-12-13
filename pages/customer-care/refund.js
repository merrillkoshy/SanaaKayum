import { useRouter } from "next/router";
import Steps from "antd/lib/steps";

import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

import uuid from "uuid/v4";


const { Step } = Steps;

const Refund = ({ products, user }) => {
  const [stepped, setStepped] = useState(0);
  const [tran, setTran] = useState(0);
  const [product, setProduct] = useState(false);

  const router = useRouter();
  const userData = user.user;

  const [stepContent, setStepContent] = useState("");
  const [reason, setReason] = useState("");
  const [flag, setFlag] = useState(false);
 
  const email=userData.email
  const address=userData.addressDetails?.addressLine+","+userData.addressDetails?.region+","+userData.addressDetails?.country
  const phone=userData.mobile
  const name=userData.firstName + " " +userData.lastName
  const reasonsArray = [
    "I did not receive the product in the promised time.",
    "I got the wrong product.",
    "I got the wrong size.",
    "I simply did not like the product",
    "Other"
  ];
  useEffect(() => {
    const { t } = router.query;
    const { s } = router.query;
    const sno = window.atob(s);
    const tr_ref = window.atob(t);
    setTran(tr_ref)
    setProduct(
      products.filter(product => {
        if (product.serialNumber === sno) return product;
      })[0]
    );
    product
      ? stepCase(0)
      : setProduct(
          products.filter(product => {
            if (product.serialNumber === sno) return product;
          })[0]
        );
  }, [typeof window !== undefined, product]);
  

 

  const analyzeReason = val => {
    setReason(val);
    axios
    .post(
      "/api/refundMail",
      {
        product:product.serialNumber,
        tran_ref:tran,
        reason:val
      },
      {
        headers: headers
      }
    )
    setStepped(1);
    setFlag(true)
  };

  const UserReason = () => {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose from the below options</Form.Label>

          <Form.Control
            as="select"
            onChange={e => {
              analyzeReason(e.target.value);

              // setReason(e.target.value)
            }}
          >
            <option key={uuid()}>--Select Value--</option>
            {reasonsArray.map(result => {
              return <option key={uuid()}>{result}</option>;
            })}
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            
            analyzeReason(reason);
            
          }}
        >
          Confirm
        </Button>
      </Form>
    );
  };
  const stepCase = step => {
    switch (step) {
      case 0:
        setStepContent(
          <>
            <UserReason />
          </>
        );
        setStepped(0);
        break;

      default:
        break;
    }
  };

  const headers = {
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Name":name,
    "Email":email,
    "Address":address,
    "Phone":phone
  };

  return (
    <>
      <Container className="pt-80">
        <Steps current={stepped}>
          <Step
            title="Requesting Reason"
            description="Please let us know what went wrong"
          />
          <Step title="Completing Request" description={reason} />
        </Steps>
        <Container className={`${"pt-100 mx-auto"}${flag?" d-none":""}`}>
          <div className="steps-content">{stepContent}</div>
        </Container>
        
        {flag?
        <>
        <Container className={`${"pt-100 mx-auto"} `}>
      <div className="steps-content"><a>Thankyou for your response!</a></div>
    </Container>
    {setTimeout(() => {
      router.back()
    }, 3000)}
    </>
    :""}
        
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
