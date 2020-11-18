import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import client from "../constants/config";
import Link from "next/link";
import { Button, Container, Row } from "react-bootstrap";
import LayoutOne from "../layouts/LayoutOne";
import { useRouter } from "next/router";

const paymentInterface=({user})=>{
    const[paymentResult,setPaymentResult]=useState('')
    const router=useRouter()
    useEffect(()=>{
        if(localStorage.getItem('Initiate')){
            const checkTrans=JSON.parse(localStorage.getItem('Initiate'))
            const headers={
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              "Authorization": process.env.NEXT_PUBLIC_SVK,
              'Access-Control-Allow-Origin': "*",
              'Content-Type': "application/json",
              'Token':user.user.entryID
            }
            axios
              .post(
               "/api/queryTrans",
                {
                  profile_id: process.env.NEXT_PUBLIC_MID,
                  tran_ref: checkTrans.tran_ref,
                },
                {
                  headers: headers
                }
              ).then((response) => {
                setPaymentResult(response.data.payment_result)
                
                localStorage.removeItem('Initiate')
            })
            .catch((error) => {
              console.log(error)
            })
        }else{
            router.push('/shop')
        }
        
      },[typeof Storage !== 'undefined' && localStorage.getItem('Initiate')]);

    return (
        <Fragment>
            <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
          <Container>
              <Row className="justify-content-md-center" style={{display:"block"}}>
                <Row >
                    {paymentResult?.response_status}
                </Row>
                <Row>
                    {paymentResult?.response_code}
                </Row>
                <Row>
                    {paymentResult?.response_message}
                </Row>
                <Row>
                    {paymentResult?.transaction_time}
                </Row>
              </Row>
              <Row>
                <Link href="/shop">
                    <Button className="justify-content-md-center">
                    Back to shop
                    </Button>
                </Link>
              </Row>
          </Container>
        </LayoutOne>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
      user: state.userData,
      cartItems: state.cartData,
      currency: state.currencyData
    };
  };
export default connect(mapStateToProps, null)(paymentInterface);