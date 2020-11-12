import PropTypes from "prop-types";
import React,{useState} from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container,Row,Col, Table } from "react-bootstrap";

const ProductDescriptionTab = ({ spaceBottomClass,product }) => {
  const [data,setData]=useState(product.description)
  const handleSelect = (eventKey) => {
    switch (eventKey) {
      case "1":
        setData(product.description)
        break;
      case "2":
        setData(
        
        <Container>
          <Table striped bordered hover size="sm">
      <tbody>
    <tr>
      <th>Color</th>
      <td>{product.color}
       {/* <div style={{backgroundColor:product.color.toLowerCase(),width: "10px",
    height: "10px",borderRadius:"50px"}}></div> */}
    </td>
    </tr>
    <tr>
      <th>Tags</th>
      <td> {product.tags && product.tags.map(tag=>{return `  ${tag},`})}</td>
    </tr>
  
    <tr>
      <th>Serial#</th>
      <td>{product.serialNumber}</td>
    </tr>
    <tr>
      <th>Category</th>
      <td>{product.article}</td>
    </tr>
    </tbody>    
  
          </Table>
        </Container>)
          break;
      
      default:
        break;
    }
  };

  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar" defaultactivekey="1" onSelect={handleSelect}>
              {/* <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="1">Description</Nav.Link>
                
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Product Info</Nav.Link>
                
              </Nav.Item>
              
            </Nav>
            {data}
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
