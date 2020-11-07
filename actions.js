import * as types from "./types";
import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
import client from "./constants/config";

const API_BASE_URL = "https://cdn.contentful.com";

export const fetchProducts = dispatch => {
  var container = [];
  const request = client
    .getEntries({
      content_type: "products",
      limit: "600"
    })
    .then(function(entries) {
      entries.items.map(function(entry, i) {
        if (entry.fields) {
          // fetch products
          console.log("here");
          container[i] = entry.fields;
        }
      });
      return [...new Set(container)];
    });
  dispatch({
    type: FETCH_PRODUCTS,
    payload: request
  });
};

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => dispatch =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() }
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => dispatch =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT });

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });
