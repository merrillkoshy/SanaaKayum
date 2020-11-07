import { FETCH_SLIDERS_SUCCESS } from "../actions/productActions";

const initState = [];

const lpsReducer = (state = initState, action) => {
  if (action.type === FETCH_SLIDERS_SUCCESS) {
    return {
      ...state,
      sliders: action.payload
    };
  }

  return state;
};

export default lpsReducer;
