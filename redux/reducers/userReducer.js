import { FETCH_USER_SUCCESS, LOGOUT_USER } from "../actions/userActions";

const initState = {
  user: []
};

const userReducer = (state = initState, action) => {
  if (action.type === FETCH_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload
    };
  }

  if (action.type === LOGOUT_USER) {
    return initState;
  }
  return state;
};

export default userReducer;
