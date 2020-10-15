import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "./index";
import { questionsInitialState } from "./questions";
import { StoreState } from "../shared/declarations";

const defaultState: StoreState = { questions: questionsInitialState };

export const store = (state: StoreState = defaultState) =>
  createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));
