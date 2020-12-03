import { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { postPurchase } from "../redux/actions/cartActions";
import clientMgr from "../constants/contentManager";
import { useRouter } from "next/router";
import PaymentResponseLayout from "../layouts/PaymentResponseLayout";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import PurchasedProductGrid from "../wrappers/product/PurchasedProductGrid";
import Swiper from "react-id-swiper";
import Link from "next/link";

const PayBySk = ({postPurchase}) => {
  const router = useRouter();
  const { pa } = router.query;
  const { ui } = router.query;
  
  const[date, setDate]=useState("")

  const [recentPurchases, setRecentPurchases] = useState([]);
  const [cartDescription, setCartDescription] = useState("");
  const [entryID,setEntryId]=useState("")
  useEffect(() => {
    setDate( window.atob(pa));
    setEntryId( window.atob(ui));
    const orderData = JSON.parse(localStorage.getItem("Initiate"));
    if(orderData){
        setRecentPurchases(orderData.cartData);
        setCartDescription(orderData.cart_description);
        const transactionResponse = {
          ...orderData,
          ...{ purchaseItems: recentPurchases }
        };
        
        clientMgr
            .then(environment => environment.getEntry(window.atob(ui)))
            .then(entry => {
              console.log(entry.fields)
              if (entry.fields["transactionsData"] === undefined) {
                entry.fields["transactionsData"] = {
                  "en-US": [transactionResponse]
                };
              } else {
                entry.fields["transactionsData"]["en-US"].push(
                  transactionResponse
                );
              }
              entry.fields.cartData["en-US"] = null;
              return entry.update();
            })
            .then(entry => {
              postPurchase(window.atob(ui));
              entry.publish();
            });
        if(orderData) localStorage.removeItem("Initiate");
    }
    if(!orderData) router.push("/shop")
    
  }, [typeof window !== undefined]);
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

  return (
    <Fragment>
      <PaymentResponseLayout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        <Container>
        <Container className="mt-10">
              <Table striped bordered  hover variant="dark" size="sm">
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
                    <td><strong>4 working days</strong></td>
                  </tr>
                  <tr>
                  <th></th>
                  <td><Link href="/shop">
             <Button className="pull-right">
               Back to shop
             </Button>
           </Link></td>
                  
                  </tr>
                </tbody>
              </Table>
              </Container>
          <Row className={` d-block d-lg-flex d-xl-flex`}>
            <Col>
              <Swiper {...settings}>
                {recentPurchases && (
                  
                  <PurchasedProductGrid
                    products={recentPurchases}
                    spaceBottomClass="mb-25"
                  />
                  
                )}
              </Swiper>
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
