import { combineReducers } from "redux";
import questions, { IQuestion } from "./questions";

export interface StoreState {
  questions: IQuestion[];
}

export const reducers = combineReducers<StoreState>({
  questions,
});
