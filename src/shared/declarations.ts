import { QuestionsReducerState } from "../ducks/questions";

export type Status = "LOADING" | "SUCCESS" | "ERROR";

export interface StoreState {
  questions: QuestionsReducerState;
}
