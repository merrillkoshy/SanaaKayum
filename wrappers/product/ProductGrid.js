import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";

const ProductGrid = ({
  products,
  currency,
  addToCart,
  userData,
  addToWishlist,
  addToCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClassName,
  spaceBottomClass
}) => {
  return (
    <Fragment>
      {products &&
        products.map(product => {
          return (
            <ProductGridSingle
              sliderClassName={sliderClassName}
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              addToCart={addToCart}
              uID={userData.user.entryID}
              addToWishlist={addToWishlist}
              addToCompare={addToCompare}
              cartItem={
                cartItems
                  ? cartItems.filter(
                      cartItem => cartItem.serialNumber === product.serialNumber
                    )[0]
                  : ""
              }
              wishlistItem={
                wishlistItems.filter(
                  wishlistItem =>
                    wishlistItem.serialNumber === product.serialNumber
                )[0]
              }
              compareItem={
                compareItems.filter(
                  compareItem =>
                    compareItem.serialNumber === product.serialNumber
                )[0]
              }
              key={product.serialNumber}
            />
          );
        })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productData.products,
      ownProps.article,
      ownProps.type,
      ownProps.limit
    ),
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
    userData: state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
    addToWishlist: (item, addToast, uID) => {
      dispatch(addToWishlist(item, addToast, uID));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
