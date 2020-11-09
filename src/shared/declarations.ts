import { QuestionsReducerState } from "../ducks/questions";
import { TrendingReducerState } from "../ducks/trending";
import { HashtagReducerState } from "../ducks/hashtag";

export type Status = "LOADING" | "SUCCESS" | "ERROR";

export interface StoreState {
  questions: QuestionsReducerState;
  trending: TrendingReducerState;
  hashtag: HashtagReducerState;
}
