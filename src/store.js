import { applyMiddleware, createStore } from "redux";
import rootRedcuer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootRedcuer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
