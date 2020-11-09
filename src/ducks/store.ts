import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { StoreState } from "../shared/declarations";

import { questionsInitialState } from "./questions";
import { trendingInitialState } from "./trending";
import { hashtagInitialState } from "./hashtag";

import questions from "./questions";
import trending from "./trending";
import hashtag from "./hashtag";

const defaultState: StoreState = {
  questions: questionsInitialState,
  trending: trendingInitialState,
  hashtag: hashtagInitialState,
};

export const reducers = combineReducers<StoreState>({
  questions,
  trending,
  hashtag,
});

export const store = (state: StoreState = defaultState) =>
  createStore(reducers, state, composeWithDevTools(applyMiddleware(thunk)));
