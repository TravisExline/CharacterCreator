
import { createStore, applyMiddleware } from "redux";
import combineReducers from './reducers/index'
import thunk from "redux-thunk";

export function configureStore() {
  return createStore(
    combineReducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

export const store = configureStore();