import { FETCH_LINGERIE_SUCCESS } from "../actions/productActions";

const initState = {
  products: []
};

const lingerieReducer = (state = initState, action) => {
  if (action.type === FETCH_LINGERIE_SUCCESS) {
    return {
      ...state,
      lingerie: action.payload
    };
  }

  return state;
};

export default lingerieReducer;
