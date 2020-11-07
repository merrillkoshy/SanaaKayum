export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const DELETE_FROM_COMPARE = "DELETE_FROM_COMPARE";
export const RESET_COMPARE = "RESET_COMPARE";
export const LOAD_COMPARE_FROM_PROFILE = "LOAD_COMPARE_FROM_PROFILE";

// add to compare
export const addToCompare = (item, addToast, uID) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Compare", {
        appearance: "success",
        autoDismiss: true
      });
    }
    dispatch({ type: ADD_TO_COMPARE, payload: { ...item, uID } });
  };
};

// delete from compare
export const deleteFromCompare = (item, addToast, uID) => {
  console.log(item);
  return dispatch => {
    if (addToast) {
      addToast("Removed From Compare", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: DELETE_FROM_COMPARE, payload: { ...item, uID } });
  };
};

//load on login
export const loadCompare = item => {
  return dispatch => {
    dispatch({ type: LOAD_COMPARE_FROM_PROFILE, payload: item });
  };
};

//reset on logout
export const resetCompare = addToast => {
  return dispatch => {
    dispatch({ type: RESET_COMPARE });
  };
};
