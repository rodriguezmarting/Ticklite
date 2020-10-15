import { combineReducers } from "redux";
import questions from "./questions";
import { StoreState } from "../shared/declarations";

export const reducers = combineReducers<StoreState>({
  questions,
});
