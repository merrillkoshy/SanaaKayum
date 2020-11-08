import { useMemo } from "react";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
// import reducers from "./reducers";
import rootReducer from "./redux/reducers/rootReducer";
import promise from "redux-promise";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

let store;
const persistConfig = {
  key: "primary",
  storage: AsyncStorage,
  whitelist: [""] // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, promise))
  );
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
export const wrapper = createWrapper(makeStore, { debug: true });
