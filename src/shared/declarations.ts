import { QuestionsReducerState } from "../ducks/questions";
import { TrendingReducerState } from "../ducks/trending";
import { HashtagReducerState } from "../ducks/hashtag";

export interface IQuestion {
  id: number;
  title: string;
  options: string[];
  caption?: string;
  authorId?: number;
  authorName: string;
  pins: number;
  isPinned: boolean;
  isAnswered?: boolean;
  createdAt?: string | Date;
  answeredAt?: string | Date;
}

export type Status = "LOADING" | "SUCCESS" | "ERROR";

export type Layout = "LAYOUT2" | "LAYOUT3" | "LAYOUT4";

export interface StoreState {
  questions: QuestionsReducerState;
  trending: TrendingReducerState;
  hashtag: HashtagReducerState;
}

export interface IPostQuestion {
  title: string;
  options: string[];
  caption?: string;
}
