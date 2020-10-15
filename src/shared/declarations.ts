import { QuestionsReducerState } from "../ducks/questions";

export type Status = "IDLE" | "LOADING" | "ERROR";

export interface StoreState {
  questions: QuestionsReducerState;
}
