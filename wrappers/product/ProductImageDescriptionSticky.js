import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Sticky from "react-sticky-el";
import { getDiscountPrice } from "../../helpers/product";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySticky from "../../components/product/ProductImageGallerySticky";

const ProductImageDescriptionSticky = ({
  spaceTopClass,
  spaceBottomClass,
  product,
  currency,
  cartItems,
  wishlistItems,
  
}) => {
  const wishlistItem = wishlistItems.filter(
    wishlistItem => wishlistItem.id === product.serialNumber
  )[0];

  const { addToast } = useToasts();

  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            <ProductImageGallerySticky product={product} />
          </div>
          <div className="col-lg-6 col-md-6">
            <Sticky
              boundaryElement=".shop-area"
              style={{ position: "relative" }}
            >
              {/* product description info */}
              <ProductDescriptionInfo
                product={product}
                discountedPrice={discountedPrice}
                currency={currency}
                finalDiscountedPrice={finalDiscountedPrice}
                finalProductPrice={finalProductPrice}
                cartItems={cartItems}
                wishlistItem={wishlistItem}
                
                addToast={addToast}
              />
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescriptionSticky.propTypes = {
  cartItems: PropTypes.array,
  
  currency: PropTypes.object,
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    
  };
};

export default connect(mapStateToProps)(ProductImageDescriptionSticky);
