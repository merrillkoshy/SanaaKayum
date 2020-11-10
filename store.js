import { useMemo } from "react";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
// import reducers from "./reducers";
import rootReducer from "./redux/reducers/rootReducer";
import promise from "redux-promise";
import { save, load } from "redux-localstorage-simple"

import AsyncStorage from "@react-native-async-storage/async-storage";

let store;


function makeStore(initialState) {
  if (typeof window === "undefined") {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, promise))
  );
}else if (typeof window !== "undefined"){
  const createStoreWithMiddleware  
    = composeWithDevTools(applyMiddleware(thunkMiddleware,save(), promise))(createStore)
    return createStoreWithMiddleware(
      rootReducer,    
      load() 
  )    
  }
}

export const initializeStore = preloadedState => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  
  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
