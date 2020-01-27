import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers", () => {
        const newRootReducer = require("../reducers").default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
