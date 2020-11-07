import { FETCH_BROCHURES_SUCCESS } from "../actions/productActions";

const initState = {
  brochures: []
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_BROCHURES_SUCCESS) {
    return {
      ...state,
      brochures: action.payload
    };
  }

  return state;
};

export default productReducer;
