import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import brochuresReducer from "./brochuresReducer";
import lookbooksReducer from "./lookbooksReducer";
import pBannersReducer from "./pBannersReducer";
import lingerieReducer from "./lingerieReducer";
import userReducer from "./userReducer";
import lpsReducer from "./landingPageSlidersReducer";
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
const rootReducer = combineReducers({
  currencyData: currencyReducer,
  productData: productReducer,
  lingerieData: lingerieReducer,
  brochuresData: brochuresReducer,
  lookbookData: lookbooksReducer,
  pBannersData: pBannersReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  userData: userReducer,
  sliderData: lpsReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    if (state.userData) nextState.userData = state.userData;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
export default reducer;
