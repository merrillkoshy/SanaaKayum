import { FETCH_LOOKBOOKS_SUCCESS } from "../actions/productActions";

const initState = {
  lookbooks: []
};

const lookbooksReducer = (state = initState, action) => {
  if (action.type === FETCH_LOOKBOOKS_SUCCESS) {
    return {
      ...state,
      lookbooks: action.payload
    };
  }

  return state;
};

export default lookbooksReducer;
