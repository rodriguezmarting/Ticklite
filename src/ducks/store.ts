import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { StoreState } from "../shared/declarations";

import { questionsInitialState } from "./questions";
import { trendingInitialState } from "./trending";

import questions from "./questions";
import trending from "./trending";

const defaultState: StoreState = {
  questions: questionsInitialState,
  trending: trendingInitialState,
};

export const reducers = combineReducers<StoreState>({
  questions,
  trending,
});

export const store = (state: StoreState = defaultState) =>
  createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));
