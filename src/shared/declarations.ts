import { QuestionsReducerState } from "../ducks/questions";
import { TrendingReducerState } from "../ducks/trending";

export type Status = "LOADING" | "SUCCESS" | "ERROR";

export interface StoreState {
  questions: QuestionsReducerState;
  trending: TrendingReducerState;
}
