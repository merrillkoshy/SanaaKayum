import clientMgr from "../../constants/contentManager";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
export const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST";
export const RESET_WISHLIST = "RESET_WISHLIST";
export const LOAD_WISHLIST_FROM_PROFILE = "LOAD_WISHLIST_FROM_PROFILE";

// add to wishlist
export const addToWishlist = (item, addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }
    dispatch({ type: ADD_TO_WISHLIST, payload: { ...item, uID } });
  };
};

// delete from wishlist
export const deleteFromWishlist = (item, addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: DELETE_FROM_WISHLIST, payload: { ...item, uID } });
  };
};

//delete all from wishlist
export const deleteAllFromWishlist = (addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: DELETE_ALL_FROM_WISHLIST, payload: uID });
  };
};

//load on login
export const loadWishlist = item => {
  return dispatch => {
    dispatch({ type: LOAD_WISHLIST_FROM_PROFILE, payload: item });
  };
};

//reset on logout
export const resetWishlist = addToast => {
  return dispatch => {
    dispatch({ type: RESET_WISHLIST });
  };
};
