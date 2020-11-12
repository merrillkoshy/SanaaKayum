import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { connect } from "react-redux";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { loginPrompt } from "../../redux/actions/userActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Rating from "./sub-components/ProductRating";
import whatsAppthis from "../../constants/whatsappHelper";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";

import SizeChartModal from "./SizeChartModal";
import LoginModal from "./LoginModal";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
const ProductDescriptionInfo = ({
  loadCart,
  loadCompare,
  loadWishlist,
  loginUser,
  product,
  userData,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
  addToast,
  addToCart,
  addToWishlist,
  addToCompare
}) => {
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.color ? product.color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.size ? product.size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.stock ? product.stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);
  const [uID, setUid] = useState("");
  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );
  const [modalShow, setModalShow] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  
  useEffect(()=>{
    setUid(userData.user.entryID)
  },[userData.user?.entryID])
  return (
    <div className="product-details-content ml-70">
      <Container>
<Row>
<Col className={"col-7"}>
<h1 className="product-page-header">{product.collectionName}</h1>
      <h2>{product.article}</h2>
      
</Col>
<Col>
{product.rating && product.rating > 0 ? (
  <div className="pro-details-rating-wrap">
    <div className="pro-details-rating" itemProp="aggregateRating">
      <span style={{ display: "none" }} itemProp="ratingValue">
        {product.rating}
      </span>
      <Rating ratingValue={product.rating} />
    </div>
  </div>
) : (
  ""
)}
</Col>

</Row>

      </Container>
     
      
      <div className="product-details-price ml-10 my-3">
        {discountedPrice !== null ? (
          <Container fluid >
            <Row>
              <Col>
            {/* currency.currencySymbol */}
            <span>{`AED ` + finalDiscountedPrice}</span>{" "}
            <span itemProp="price" className="old">
              {`AED ` + finalProductPrice}
            </span>
            </Col>
            </Row>
          </Container>
        ) : (
          <span itemProp="price">{`AED ` + finalProductPrice} </span>
        )}
      </div>
      
      

      {product.color ? (
        <div className="pro-details-size-color">
          <span style={{ display: "none" }} itemProp="color">
            {product.color}
          </span>
          {/* <div className="pro-details-color-wrap">
            <span>Color</span>
            <div className="pro-details-color-content">
              <label
                className={`pro-details-color-content--single ${product.color}`}
              >
                <input
                  type="radio"
                  value={product.color}
                  name="product-color"
                  checked={
                    product.color === selectedProductColor ? "checked" : ""
                  }
                  onChange={() => {
                    setSelectedProductColor(product.color);
                    setSelectedProductSize(product.size[0].name);
                    setProductStock(product.size[0].stock);
                    setQuantityCount(1);
                  }}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div> */}
            <Container fluid>
          <div className="pro-details-size">
            <span>Size</span>
            <div className="pro-details-size-content">
<Row>
<Col>
{product.size.map((sz, key) => {
  return (
    <label
      className={`pro-details-size-content--single`}
      key={key}
    >
      {sz.gtin ? (
        <span style={{ display: "none" }} itemProp="gtin">
          {sz.gtin}
        </span>
      ) : (
        ""
      )}

      <input
        type="radio"
        value={sz.name}
        name="product-size"
        checked={sz.name === selectedProductSize ? "checked" : ""}
        onChange={() => {
          setSelectedProductColor(product.color);
          setSelectedProductSize(sz.name);
          setProductStock(sz.stock);
          setQuantityCount(1);
        }}
      />

      <span className="size-name">{sz.name}</span>
    </label>
  );
})}
</Col>
<Col>
<Button className="sk-button" onClick={() => setModalShow(true)}>Size Chart</Button>
</Col>
<SizeChartModal show={modalShow} onHide={()=>setModalShow(false)} article={product.article}/>
</Row>

            </div>
          </div>
      </Container>
        </div>
      ) : (
        ""
      )}

      <Fragment>
        <div className="pro-details-quality">
          <div className="cart-plus-minus">
            <button
              onClick={() =>
                setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
              }
              className="dec qtybutton"
            >
              -
            </button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button
              onClick={() =>
                setQuantityCount(
                  quantityCount < productStock - productCartQty
                    ? quantityCount + 1
                    : quantityCount
                )
              }
              className="inc qtybutton"
            >
              +
            </button>
          </div>

          <div className="pro-details-cart btn-hover">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  {
                  uID!==undefined?
                  addToCart(
                    product,
                    addToast,
                    uID,
                    quantityCount,
                    selectedProductColor,
                    selectedProductSize
                  ):setloginModal("true")}
                }
                disabled={productCartQty >= productStock}
              >
                {" "}
                Add To Cart{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
          <LoginModal 
      show={loginModal} 
      onHide={() => setloginModal(false)} 
      loadCart={loadCart}
      loadCompare={loadCompare}
      loadWishlist={loadWishlist}
      loginUser={loginUser}
      addtoast={addToast}/>
          <div className="pro-details-wishlist">
            <button
              className={wishlistItem !== undefined ? "active" : ""}
              disabled={wishlistItem !== undefined}
              title={
                wishlistItem !== undefined
                  ? "Added to wishlist"
                  : "Add to wishlist"
              }
              onClick={() => {
                uID !== undefined
                ? addToWishlist(product, addToast)
                : setloginModal("true");
                
              }}
            >
              <i className="pe-7s-like" />
            </button>
          </div>
          <div className="pro-details-cart wapp">
            {productStock && productStock > 0 ? (
              <button
                onClick={() => whatsAppthis(product)}
                disabled={productCartQty >= productStock}
              >
                {" "}
                <i className="fa fa-whatsapp"></i> {"Enquire"}{" "}
              </button>
            ) : (
              <button disabled>Out of Stock</button>
            )}
          </div>
        </div>
        
      </Fragment>
      <ProductDescriptionTab
          spaceBottomClass="pb-90"
          product={product}
        />

      {/* {product.article ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
            <li key={product.serialNumber}>
              <Link
                to={
                  process.env.NEXT_PUBLIC_PUBLIC_URL +
                  "/shop?search=" +
                  product.article.toLowerCase()
                }
              >
                {product.article}
              </a>
            </li>
            
          </ul>
        </div>
      ) : (
        ""
      )}
      {product.tags ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tags.map((single, key) => {
              return (
                <li key={key}>
                  <Link
                    to={
                      process.env.NEXT_PUBLIC_PUBLIC_URL +
                      "/shop?search=" +
                      single.toLowerCase()
                    }
                  >
                    {single}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )} */}

      <div className="pro-details-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/SanaaKayum">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sanaa_kayum/">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/sanaakayumhc/">
              <i className="fa fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/SKClothingart">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/sanaa-kayum/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userDetails, addToast, entryID) => {
      dispatch(loginUser(userDetails, addToast, entryID));
    },
    loadCart: item => {
      dispatch(loadCart(item));
    },
    loadCompare: item => {
      dispatch(loadCompare(item));
    },
    loadWishlist: item => {
      dispatch(loadWishlist(item));
    },
    addToCart: (
      item,
      addToast,
      uID,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          uID,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    loginPrompt: addToast => {
      dispatch(loginPrompt(addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionInfo);
