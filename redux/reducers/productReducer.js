import { FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";
import { HYDRATE } from "next-redux-wrapper";

const initState = {
  products: []
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
