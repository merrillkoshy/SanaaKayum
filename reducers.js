// import { combineReducers } from "redux";
// import * as types from "./types";

// import { FETCH_POSTS } from "./actions";

// const INITIAL_STATE = { all: [] };

// const productsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_POSTS:
//       return { ...state, all: action.payload.data.items };
//     default:
//       return state;
//   }
// };
// // COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1;
//     case types.DECREMENT:
//       return state - 1;
//     case types.RESET:
//       return 0;
//     default:
//       return state;
//   }
// };

// // INITIAL TIMER STATE
// const initialTimerState = {
//   lastUpdate: 0,
//   light: false
// };

// // TIMER REDUCER
// const timerReducer = (state = initialTimerState, { type, payload }) => {
//   switch (type) {
//     case types.TICK:
//       return {
//         lastUpdate: payload.ts,
//         light: !!payload.light
//       };
//     default:
//       return state;
//   }
// };

// // COMBINED REDUCERS
// const reducers = {
//   products: productsReducer,
//   counter: counterReducer,
//   timer: timerReducer
// };

// export default combineReducers(reducers);
