import PropTypes from "prop-types";
import React,{useState, Fragment} from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  setActiveSort
} from "../../helpers/product";
import { Accordion, Button, Row, Col,Modal, Container } from "react-bootstrap";




const ShopTopFilter = (props) => {
  
  const [filterKey,setFilterKey]=useState("")
  const {products}=props
  const {getSortParams}=props
  
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);
  
  
  return (
    <Fragment>
    <Modal show={props.show} onHide={props.onHide} className="filter-products-modal">
        <Modal.Header closeButton>
          <Modal.Title>Filter Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="product-filter-wrapper" >
    
      <div className="product-filter-wrapper__inner">
        <div className="row">
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Categories</h5>
              {uniqueCategories ? (
                <ul>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key} onClick={props.onHide}>
                        <button
                          onClick={e => {
                            
                            getSortParams("category", category);
                            setActiveSort(e);
                            
                            setFilterKey(category)
                            
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

          {/* Product Filter */} 
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <Accordion >
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row>
                <Col > <i className="fa fa-plus"></i></Col><Col><h5>Color</h5></Col>
                </Row>
                
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                {uniqueColors ? (
                <ul>
                  {uniqueColors.map((color, key) => {
                    return (
                       <li key={key} onClick={props.onHide}>
                        <button
                          onClick={e => {
                            setShowModal(false)
                            getSortParams("color", color);
                            setActiveSort(e);
                            setFilterKey(color)
                          }}
                        >
                          {color}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No colors found"
              )}
                </Accordion.Collapse>
              </Accordion>
              
              
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
            <Accordion >
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Row>
                <Col > <i className="fa fa-plus"></i></Col><Col><h5>Size</h5></Col>
                </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                {uniqueSizes ? (
                <ul>
                  {uniqueSizes.map((size, key) => {
                    return (
                       <li key={key} onClick={props.onHide}>
                        <button
                          className="text-uppercase"
                          onClick={e => {
                            getSortParams("size", size);
                            setActiveSort(e);
                            setFilterKey(size)
                            setShowModal(false)
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No sizes found"
              )}
                </Accordion.Collapse>
              </Accordion>

              
              
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter product-filter--tag">

            <Accordion >
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Row>
                <Col > <i className="fa fa-plus"></i></Col><Col><h5>Tags</h5></Col>
                </Row>
                
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                       <li key={key} onClick={props.onHide}>
                        <button
                          onClick={e => {
                            getSortParams("tag", tag);
                            setActiveSort(e);
                            setFilterKey(tag)
                            setShowModal(false)
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
                </Accordion.Collapse>
              </Accordion>


              
              
            </div>
          </div>
        </div>
      </div>
    </div>
        

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          
        </Modal.Footer>
      </Modal>

      

{filterKey?<Row> 
  <Col>{`#${filterKey}`}</Col>
  <Col><Button className="clear-filters" onClick={e => {
              getSortParams("category", "");
              setActiveSort(e); 
              setFilterKey("")
            }}> <i className="fa fa-close">Clear Filters</i></Button></Col>
  </Row>:""}

    </Fragment>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;

