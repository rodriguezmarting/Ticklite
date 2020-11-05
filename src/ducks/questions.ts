import { Dispatch } from "redux";
import api from "../shared/axios";
import { createSelector } from "reselect";
import produce from "immer";
import { Status, StoreState } from "../shared/declarations";
import { AxiosResponse, AxiosError } from "axios";

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

export type ActionTypes =
  | "GET_QUESTIONS"
  | "GET_QUESTIONS_SUCCESS"
  | "GET_QUESTIONS_ERROR";

export interface FetchQuestionsAction {
  type: "GET_QUESTIONS";
}

export interface FetchQuestionsSuccessAction {
  type: "GET_QUESTIONS_SUCCESS";
  payload: IQuestion[];
}

export interface FetchQuestionsErrorAction {
  type: "GET_QUESTIONS_ERROR";
  payload: string;
}

type Action =
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction;
const FETCH_QUESTIONS_ENDPOINT = "/questions";

export interface QuestionsReducerState {
  data: IQuestion[];
  status: Status;
  error: string;
}

export const questionsInitialState: QuestionsReducerState = {
  data: [],
  status: "LOADING",
  error: "",
};

export default function reducer(
  state: QuestionsReducerState = questionsInitialState,
  action: Action
): QuestionsReducerState {
  switch (action.type) {
    case "GET_QUESTIONS":
      return produce(state, (draft) => {
        draft.status = "LOADING";
      });
    case "GET_QUESTIONS_SUCCESS":
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.status = "SUCCESS";
        draft.error = "";
      });
    case "GET_QUESTIONS_ERROR":
      return produce(state, (draft) => {
        draft.status = "ERROR";
        draft.error = action.payload;
      });
    default:
      return state;
  }
}

export function fetchQuestions() {
  return async (dispatch: Dispatch) => {
    dispatch<FetchQuestionsAction>({
      type: "GET_QUESTIONS",
    });
    api
      .get<IQuestion[]>(FETCH_QUESTIONS_ENDPOINT)
      .then((response: AxiosResponse<IQuestion[]>) => {
        dispatch<FetchQuestionsSuccessAction>({
          type: "GET_QUESTIONS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        dispatch<FetchQuestionsErrorAction>({
          type: "GET_QUESTIONS_ERROR",
          payload: error.message,
        });
      });
  };
}

// TODO: This is a simple test to Reselect, probably will be removed.
const questionsSelector = (state: StoreState) => state.questions;
export const selectQuestions = createSelector(
  questionsSelector,
  (questions) => ({
    data: questions.data.map(
      ({
        id,
        title,
        options,
        caption,
        authorName,
        pins,
        isPinned,
        isAnswered,
      }: IQuestion) => ({
        id,
        title,
        options,
        caption,
        authorName,
        pins,
        isPinned,
        isAnswered,
      })
    ),
    status: questions.status,
    error: questions.error,
  })
);
