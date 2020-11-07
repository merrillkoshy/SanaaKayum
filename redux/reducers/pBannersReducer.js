import { FETCH_BANNERS_SUCCESS } from "../actions/productActions";

const initState = {
  pBanners: []
};

const pBannersReducer = (state = initState, action) => {
  if (action.type === FETCH_BANNERS_SUCCESS) {
    return {
      ...state,
      pBanners: action.payload
    };
  }

  return state;
};

export default pBannersReducer;
