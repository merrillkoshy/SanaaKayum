import clientMgr from "../../constants/contentManager";

import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  DELETE_ALL_FROM_WISHLIST,
  LOAD_WISHLIST_FROM_PROFILE,
  RESET_WISHLIST
} from "../actions/wishlistActions";

const initState = [];

const atw = (uID, finalWish) => {
  clientMgr
    .then(environment => environment.getEntry(uID))

    .then(entry => {
      entry.fields["wishlistData"] = { "en-US": [finalWish] };
      return entry.update();
    })
    .then(entry => entry.publish());
};

const wishlistReducer = (state = initState, action) => {
  const wishlistItems = state,
    product = action.payload;

  const atwOps = () => {
    const wishlistItem = wishlistItems.filter(
      item => item.serialNumber === product.serialNumber
    )[0];
    if (wishlistItem === undefined) {
      return [...wishlistItems, product];
    } else {
      return wishlistItems;
    }
  };

  const dfwOps = () => {
    const remainingItems = (wishlistItems, product) =>
      wishlistItems.filter(
        wishlistItem => wishlistItem.serialNumber !== product.serialNumber
      );

    return remainingItems(wishlistItems, product);
  };
  const dafwOps = () => {
    return wishlistItems.filter(item => {
      return false;
    });
  };
  if (action.type === ADD_TO_WISHLIST) {
    const wishAdd = atwOps();
    atw(product.uID, wishAdd);
    return wishAdd;
  }

  if (action.type === DELETE_FROM_WISHLIST) {
    const dfWish = dfwOps();

    dfWish.length
      ? atw(product.uID, dfWish)
      : atw(product.uID, null);
    return dfWish;
  }

  if (action.type === DELETE_ALL_FROM_WISHLIST) {
    const deleteAllFromWishList = dafwOps();
    atw(product.uID, null);
    return deleteAllFromWishList;
  }
  if (action.type === LOAD_WISHLIST_FROM_PROFILE) {
    return product;
  }

  if (action.type === RESET_WISHLIST) {
    return initState;
  }

  return wishlistItems;
};

export default wishlistReducer;
