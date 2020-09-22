import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers, StoreState } from "./index";

const defaultState = { questions: [] };

export const store = (state: StoreState = defaultState) =>
  createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));
