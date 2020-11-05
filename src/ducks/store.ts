import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { StoreState } from "../shared/declarations";

import { questionsInitialState } from "./questions";
import { trendingsInitialState } from "./trendings";

import questions from "./questions";
import trendings from "./trendings";

const defaultState: StoreState = {
  questions: questionsInitialState,
  trendings: trendingsInitialState,
};

export const reducers = combineReducers<StoreState>({
  questions,
  trendings,
});

export const store = (state: StoreState = defaultState) =>
  createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));
