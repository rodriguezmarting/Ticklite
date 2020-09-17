import { combineReducers } from "redux";
import questions, { Question } from "./questions";

export interface StoreState {
  questions: Question[];
}

export const reducers = combineReducers<StoreState>({
  questions,
});

