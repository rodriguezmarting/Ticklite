import { Dispatch } from "redux";
import api from "../shared/axios";
import produce from "immer";
import { Status, StoreState } from "../shared/declarations";
import { AxiosResponse, AxiosError } from "axios";
import { IQuestion } from "./questions";

export type ActionTypes =
  | "GET_HASHTAG"
  | "GET_HASHTAG_SUCCESS"
  | "GET_HASHTAG_ERROR";

export interface FetchHashtagAction {
  type: "GET_HASHTAG";
}

export interface FetchHashtagSuccessAction {
  type: "GET_HASHTAG_SUCCESS";
  payload: IQuestion[];
  title: string;
  id: number;
}

export interface FetchHashtagErrorAction {
  type: "GET_HASHTAG_ERROR";
  payload: string;
}

type Action =
  | FetchHashtagAction
  | FetchHashtagSuccessAction
  | FetchHashtagErrorAction;

const FETCH_HASHTAG_ENPOINT = "/hashtag";

export interface HashtagReducerState {
  data: IQuestion[];
  status: Status;
  error: string;
  title: string;
  id: number;
}

export const hashtagInitialState: HashtagReducerState = {
  data: [],
  status: "LOADING",
  error: "",
  title: "",
  id: 0,
};

export default function reducer(
  state: HashtagReducerState = hashtagInitialState,
  action: Action
): HashtagReducerState {
  switch (action.type) {
    case "GET_HASHTAG":
      return produce(state, (draft) => {
        draft.status = "LOADING";
      });
    case "GET_HASHTAG_SUCCESS":
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.status = "SUCCESS";
        draft.title = action.title;
        draft.id = action.id;
        draft.error = "";
      });
    case "GET_HASHTAG_ERROR":
      return produce(state, (draft) => {
        draft.status = "ERROR";
        draft.error = action.payload;
      });
    default:
      return state;
  }
}

interface SuccessResponse {
  questions: IQuestion[];
  title: string;
  id: number;
}

export function fetchHashtag(id: number) {
  return async (dispatch: Dispatch) => {
    dispatch<FetchHashtagAction>({
      type: "GET_HASHTAG",
    });
    api
      .get<SuccessResponse>(`${FETCH_HASHTAG_ENPOINT}/${id}`)
      .then((response: AxiosResponse<SuccessResponse>) => {
        dispatch<FetchHashtagSuccessAction>({
          type: "GET_HASHTAG_SUCCESS",
          payload: response.data.questions,
          title: response.data.title,
          id: response.data.id,
        });
      })
      .catch((error: AxiosError) => {
        dispatch<FetchHashtagErrorAction>({
          type: "GET_HASHTAG_ERROR",
          payload: error.message,
        });
      });
  };
}

export const hashtagSelector = (state: StoreState) => state.hashtag;
