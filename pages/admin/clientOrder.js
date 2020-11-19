import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import client from "../../constants/config";

const clientOrders = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState('');
  const [ps, setP] = useState('');
  const handleClose=()=>setModalShow(false);
  const router=useRouter();
  const { cr,ci } = router.query
const customer_id=ci
const cart_id=cr




  useEffect(() => {
    setModalShow(true);
  }, [isLoggedIn === false]);

  function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e=>{
                setEmail(e.target.value)
              }}/>
              
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e=>{
                setP(e.target.value)
              }}/>
            </Form.Group>
            <Button
              onClick={e => {
                e.preventDefault();
                if (email === "H" && ps === "$") {
                  setIsLoggedIn(true);
                  handleClose();
                }
              }}
              className="loginButton"
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
      <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      {/* {isLoggedIn?router:""} */}
      </>
  );
};
export default clientOrders;
