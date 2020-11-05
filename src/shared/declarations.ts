import { QuestionsReducerState } from "../ducks/questions";
import { TrendingsReducerState } from "../ducks/trendings";

export type Status = "LOADING" | "SUCCESS" | "ERROR";

export interface StoreState {
  questions: QuestionsReducerState;
  trendings: TrendingsReducerState;
}
