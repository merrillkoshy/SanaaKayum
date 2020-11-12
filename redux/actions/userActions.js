export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER_SUCCESS";

// login
export const loginUser = (userDetails, addToast, entryID, loginInfo) => {
  
  userDetails.entryID = entryID;
  return dispatch => {
    if (addToast) {
      addToast("Logged in as " + userDetails.username, {
        appearance: "success",
        autoDismiss: true
      });
    }
    
    dispatch({ type: FETCH_USER_SUCCESS, payload: userDetails });
  };
};

//logout
export const logoutUser = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Logged out", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: LOGOUT_USER });
  };
};

//logout
export const loginPrompt = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Dont let your wishes fade ! Please login to your SK Account.", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: LOGOUT_USER });
  };
};
