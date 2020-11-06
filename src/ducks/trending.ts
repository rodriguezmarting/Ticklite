import { Dispatch } from "redux";
import api from "../shared/axios";
import produce from "immer";
import { Status, StoreState } from "../shared/declarations";
import { AxiosResponse, AxiosError } from "axios";
import { IQuestion } from "./questions";

export interface ITrending {
  id: number;
  title: string;
  interactions: number;
  topQuestions: IQuestion[];
}

export type ActionTypes =
  | "GET_TRENDING"
  | "GET_TRENDING_SUCCESS"
  | "GET_TRENDING_ERROR";

export interface FetchTrendingAction {
  type: "GET_TRENDING";
}

export interface FetchTrendingSuccessAction {
  type: "GET_TRENDING_SUCCESS";
  payload: ITrending[];
}

export interface FetchTrendingErrorAction {
  type: "GET_TRENDING_ERROR";
  payload: string;
}

type Action =
  | FetchTrendingAction
  | FetchTrendingSuccessAction
  | FetchTrendingErrorAction;
const FETCH_TRENDINGS_ENDPOINT = "/trending";

export interface TrendingReducerState {
  data: ITrending[];
  status: Status;
  error: string;
}

export const trendingInitialState: TrendingReducerState = {
  data: [],
  status: "LOADING",
  error: "",
};

export default function reducer(
  state: TrendingReducerState = trendingInitialState,
  action: Action
): TrendingReducerState {
  switch (action.type) {
    case "GET_TRENDING":
      return produce(state, (draft) => {
        draft.status = "LOADING";
      });
    case "GET_TRENDING_SUCCESS":
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.status = "SUCCESS";
        draft.error = "";
      });
    case "GET_TRENDING_ERROR":
      return produce(state, (draft) => {
        draft.status = "ERROR";
        draft.error = action.payload;
      });
    default:
      return state;
  }
}

export function fetchTrending() {
  return async (dispatch: Dispatch) => {
    dispatch<FetchTrendingAction>({
      type: "GET_TRENDING",
    });
    api
      .get<ITrending[]>(FETCH_TRENDINGS_ENDPOINT)
      .then((response: AxiosResponse<ITrending[]>) => {
        dispatch<FetchTrendingSuccessAction>({
          type: "GET_TRENDING_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        dispatch<FetchTrendingErrorAction>({
          type: "GET_TRENDING_ERROR",
          payload: error.message,
        });
      });
  };
}

export const trendingSelector = (state: StoreState) => state.trending;
