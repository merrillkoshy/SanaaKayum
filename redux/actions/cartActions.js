export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";
export const RESET_CART = "RESET_CART";
export const LOAD_CART_FROM_PROFILE = "LOAD_CART_FROM_PROFILE";
export const POST_PURCHASE="POST_PURCHASE";
//add to cart
export const addToCart = (
  item,
  addToast,
  uID,
  quantityCount,
  selectedProductColor,
  selectedProductSize
) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Cart", { appearance: "success", autoDismiss: true });
    }
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        uID: uID,
        quantity: quantityCount,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : item.selectedProductColor
          ? item.selectedProductColor
          : null,
        selectedProductSize: selectedProductSize
          ? selectedProductSize
          : item.selectedProductSize
          ? item.selectedProductSize
          : null
      }
    });
  };
};
//decrease from cart
export const decreaseQuantity = (item, addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }
    dispatch({ type: DECREASE_QUANTITY, payload: { ...item, uID } });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
    }
    dispatch({ type: DELETE_FROM_CART, payload: { ...item, uID } });
  };
};
//delete all from cart
export const deleteAllFromCart = (addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: DELETE_ALL_FROM_CART, payload: uID });
  };
};

//load on login
export const loadCart = item => {
  return dispatch => {
    dispatch({ type: LOAD_CART_FROM_PROFILE, payload: item });
  };
};

//reset on logout
export const resetCart = () => {
  return dispatch => {
    dispatch({ type: RESET_CART });
  };
};
export const postPurchase = uID => {
  
  return dispatch => {
    dispatch({ type: POST_PURCHASE,payload:uID });
  };
};

// get stock of cart item
export const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.color
      .filter(single => single === color)[0]
      .size.filter(single => single.name === size)[0].stock;
  }
};
