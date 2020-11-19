import { Dispatch } from "redux";
import api from "../shared/axios";
import { createSelector } from "reselect";
import produce from "immer";
import {
  Status,
  StoreState,
  IQuestion,
  IPostQuestion,
} from "../shared/declarations";
import { AxiosResponse, AxiosError } from "axios";

export type ActionTypes =
  | "GET_QUESTIONS"
  | "GET_QUESTIONS_SUCCESS"
  | "GET_QUESTIONS_ERROR"
  | "POST_QUESTION"
  | "POST_QUESTION_SUCCESS"
  | "POST_QUESTION_ERROR";

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

export interface PostQuestionAction {
  type: "POST_QUESTION";
}

export interface PostQuestionSuccessAction {
  type: "POST_QUESTION_SUCCESS";
  payload: IQuestion;
}

export interface PostQuestionErrorAction {
  type: "POST_QUESTION_ERROR";
  payload: string;
}

type Action =
  | FetchQuestionsAction
  | FetchQuestionsSuccessAction
  | FetchQuestionsErrorAction
  | PostQuestionAction
  | PostQuestionSuccessAction
  | PostQuestionErrorAction;

const QUESTIONS_ENDPOINT = "/questions";

export interface QuestionsReducerState {
  data: IQuestion[];
  status: Status;
  error: string;
  statusCreate?: Status;
  errorCreate?: string;
}

export const questionsInitialState: QuestionsReducerState = {
  data: [],
  status: "LOADING",
  error: "",
  statusCreate: "SUCCESS",
  errorCreate: "",
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
    case "POST_QUESTION":
      return produce(state, (draft) => {
        draft.statusCreate = "LOADING";
      });
    case "POST_QUESTION_SUCCESS":
      return produce(state, (draft) => {
        draft.data.push(action.payload);
        draft.statusCreate = "SUCCESS";
        draft.errorCreate = "";
      });
    case "POST_QUESTION_ERROR":
      return produce(state, (draft) => {
        draft.statusCreate = "ERROR";
        draft.errorCreate = action.payload;
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
      .get<IQuestion[]>(QUESTIONS_ENDPOINT)
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

export function postQuestion({ title, options, caption = "" }: IPostQuestion) {
  return async (dispatch: Dispatch) => {
    dispatch<PostQuestionAction>({
      type: "POST_QUESTION",
    });
    api
      .post(QUESTIONS_ENDPOINT, {
        title,
        options,
        caption,
        authorId: 1,
        authorName: "You",
        pins: 0,
        isPinned: false,
        isAnswered: false,
        createdAt: Date().toString(),
        answeredAt: Date().toString(),
      })
      .then((response: AxiosResponse) => {
        dispatch<PostQuestionSuccessAction>({
          type: "POST_QUESTION_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        dispatch<PostQuestionErrorAction>({
          type: "POST_QUESTION_ERROR",
          payload: error.message,
        });
      });
  };
}

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

export const errorCreateSelector = (state: StoreState) =>
  state.questions.errorCreate;

export const statusCreateSelector = (state: StoreState) =>
  state.questions.statusCreate;
