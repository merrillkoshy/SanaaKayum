import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import clientMgr from "../constants/contentManager";
import {  resetCart } from "../redux/actions/cartActions";
import Link from "next/link";
import { Button, Container, Row } from "react-bootstrap";
import PaymentResponseLayout from "../layouts/PaymentResponseLayout";
import { useRouter } from "next/router";
import PurchasedProductGrid from "../wrappers/product/PurchasedProductGrid";

const paymentInterface=({user,resetCart})=>{
    const[paymentResult,setPaymentResult]=useState('')
    const[paymentResponseCode,setPaymentResponseCode]=useState('')
    const router=useRouter()
    const userData=user.user;
    const recentPurchase=userData.cartData;
    useEffect(()=>{
        if(localStorage.getItem('Initiate')){
            const checkTrans=JSON.parse(localStorage.getItem('Initiate'))
            const headers={
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
              "Authorization": process.env.NEXT_PUBLIC_SVK,
              'Access-Control-Allow-Origin': "*",
              'Content-Type': "application/json",
              'Token':userData?.entryID
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
                setPaymentResponseCode(response.data.payment_result.response_code)
                const transactionResponse={...response,...checkTrans}
                clientMgr
                .then(environment => environment.getEntry(userData.entryID))
                .then(entry => {
                  if (entry.fields["transactionsData"] === undefined)
                  entry.fields["transactionsData"] = { "en-US": [transactionResponse] };
                  else entry.fields["transactionsData"]["en-US"].push(transactionResponse);
                  return entry.update();
                })
                .then(entry => entry.publish())
                .then(()=>{
                  
                  localStorage.removeItem('Initiate')
                })
                
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
            <PaymentResponseLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
          <Container>
                {paymentResponseCode==="200"? 
              
                (<>
                  <PurchasedProductGrid
                  products={recentPurchase} spaceBottomClass="mb-25"
                  />
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
                  </>
                )
              // ()=>{resetCart(userData.entryID);} 

              
                :
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
          }
               
              
              <Row>
                <Link href="/shop">
                    <Button className="justify-content-md-center">
                    Back to shop
                    </Button>
                </Link>
              </Row>
          </Container>
        </PaymentResponseLayout>
        </Fragment>
    )
}
const mapDispatchToProps = dispatch => {
  return {
    resetCart: (uID) => {
      dispatch(resetCart(uID));
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