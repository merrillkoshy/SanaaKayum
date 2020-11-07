import { deviceType } from "react-device-detect";
import clientMgr from "../../constants/contentManager";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER_SUCCESS";

// login
export const loginUser = (userDetails, addToast, entryID, loginInfo) => {
  
  userDetails.entryID = entryID;
  if (!userDetails.loginInfo.loggedInDevices) {
    userDetails.loginInfo.loggedInDevices = 1;
  } else {
    userDetails.loginInfo.loggedInDevices =
      userDetails.loginInfo.loggedInDevices + 1;
  }
  userDetails.loginInfo.dUA = deviceType;

  clientMgr
    .then(environment => environment.getEntry(entryID))

    .then(entry => {
      entry.fields.loginInfo["en-US"] = {
        loggedInDevices: userDetails.loginInfo.loggedInDevices,
        dUA: userDetails.loginInfo.dUA
      };
      return entry.update();
    })
    .then(entry => entry.publish());

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
