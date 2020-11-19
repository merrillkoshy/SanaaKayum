import uuid from "uuid/v4";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
  LOAD_CART_FROM_PROFILE,
  RESET_CART
} from "../actions/cartActions";
import clientMgr from "../../constants/contentManager";
const atc = (uID, finalCart) => {
  clientMgr
    .then(environment => environment.getEntry(uID))

    .then(entry => {
      entry.fields.cartData["en-US"] = finalCart;
      return entry.update();
    })
    .then(entry => entry.publish());
};
const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
    product = action.payload;
  const atcOps = () => {
    if (product.variation === undefined) {
      // ;
      // const cartItem=
      const cartItem = cartItems.filter(
        item => item.serialNumber === product.serialNumber
      )[0];
      if (cartItem === undefined) {
        return [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid()
          }
        ];
      } else {
        return cartItems.map(item =>
          item.cartItemId === cartItem.cartItemId
            ? {
                ...item,
                quantity: product.quantity
                  ? item.quantity + product.quantity
                  : item.quantity + 1
              }
            : item
        );
      }
      // for variant products
    } else {
      const cartItem = cartItems.filter(
        item =>
          item.id === product.id &&
          product.selectedProductColor &&
          product.selectedProductColor === item.selectedProductColor &&
          product.selectedProductSize &&
          product.selectedProductSize === item.selectedProductSize &&
          (product.cartItemId ? product.cartItemId === item.cartItemId : true)
      )[0];

      if (cartItem === undefined) {
        return [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid()
          }
        ];
      } else if (
        cartItem !== undefined &&
        (cartItem.selectedProductColor !== product.selectedProductColor ||
          cartItem.selectedProductSize !== product.selectedProductSize)
      ) {
        return [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid()
          }
        ];
      } else {
        return cartItems.map(item =>
          item.cartItemId === cartItem.cartItemId
            ? {
                ...item,
                quantity: product.quantity
                  ? item.quantity + product.quantity
                  : item.quantity + 1,
                selectedProductColor: product.selectedProductColor,
                selectedProductSize: product.selectedProductSize
              }
            : item
        );
      }
    }
  };

  const dfcOps = () => {
    if (product.quantity === 1) {
      const remainingItems = (cartItems, product) =>
        cartItems.filter(
          cartItem => cartItem.cartItemId !== product.cartItemId
        );

      return remainingItems(cartItems, product);
    } else {
      return cartItems.map(item =>
        item.cartItemId === product.cartItemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  };

  const rfcOps = () => {
    const remainingItems = (cartItems, product) =>
      cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

    return remainingItems(cartItems, product);
  };

  const dAfc = () => {
    return cartItems.filter(item => {
      return false;
    });
  };

  const resetAfterBuy =()=>{

  }
  if (action.type === ADD_TO_CART) {
    // for non variant
    const finalCart = atcOps();
   
    atc(product.uID, finalCart);

    return finalCart;
  }

  if (action.type === DECREASE_QUANTITY) {
    const remCart = dfcOps();
    remCart.length
      ? atc(product.uID, remCart)
      : atc(product.uID, [
          {
            unNull: "unNull"
          }
        ]);
    return remCart;
  }

  if (action.type === LOAD_CART_FROM_PROFILE) {
    return product;
  }
  if (action.type === RESET_CART) {
    const deleteFCart = dAfc();
    atc(product, [
      {
        unNull: "unNull"
      }
    ]);
    return deleteFCart;
  }

  if (action.type === DELETE_FROM_CART) {
    const deleteFCart = rfcOps();
    
    deleteFCart.length
      ? atc(product.uID, deleteFCart)
      : atc(product.uID, [
          {
            unNull: "unNull"
          }
        ]);
    return deleteFCart;
  }

  if (action.type === DELETE_ALL_FROM_CART) {
    const deleteFCart = dAfc();
    atc(product.uID, [
      {
        unNull: "unNull"
      }
    ]);
    return deleteFCart;
  }

  return state;
};

export default cartReducer;
