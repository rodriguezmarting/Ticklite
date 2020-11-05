import { Dispatch } from "redux";
import api from "../shared/axios";
import produce from "immer";
import { Status, StoreState } from "../shared/declarations";
import { AxiosResponse, AxiosError } from "axios";

export interface ITrending {
  id: number;
  title: string;
  interactions: number;
  topQuestionsIds: number[];
}

export type ActionTypes =
  | "GET_TRENDINGS"
  | "GET_TRENDINGS_SUCCESS"
  | "GET_TRENDINGS_ERROR";

export interface FetchTrendingsAction {
  type: "GET_TRENDINGS";
}

export interface FetchTrendingsSuccessAction {
  type: "GET_TRENDINGS_SUCCESS";
  payload: ITrending[];
}

export interface FetchTrendingsErrorAction {
  type: "GET_TRENDINGS_ERROR";
  payload: string;
}

type Action =
  | FetchTrendingsAction
  | FetchTrendingsSuccessAction
  | FetchTrendingsErrorAction;
const FETCH_TRENDINGS_ENDPOINT = "/trendingHashtags";

export interface TrendingsReducerState {
  data: ITrending[];
  status: Status;
  error: string;
}

export const trendingsInitialState: TrendingsReducerState = {
  data: [],
  status: "LOADING",
  error: "",
};

export default function reducer(
  state: TrendingsReducerState = trendingsInitialState,
  action: Action
): TrendingsReducerState {
  switch (action.type) {
    case "GET_TRENDINGS":
      return produce(state, (draft) => {
        draft.status = "LOADING";
      });
    case "GET_TRENDINGS_SUCCESS":
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.status = "SUCCESS";
        draft.error = "";
      });
    case "GET_TRENDINGS_ERROR":
      return produce(state, (draft) => {
        draft.status = "ERROR";
        draft.error = action.payload;
      });
    default:
      return state;
  }
}

export function fetchTrendings() {
  return async (dispatch: Dispatch) => {
    dispatch<FetchTrendingsAction>({
      type: "GET_TRENDINGS",
    });
    api
      .get<ITrending[]>(FETCH_TRENDINGS_ENDPOINT)
      .then((response: AxiosResponse<ITrending[]>) => {
        dispatch<FetchTrendingsSuccessAction>({
          type: "GET_TRENDINGS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error: AxiosError) => {
        dispatch<FetchTrendingsErrorAction>({
          type: "GET_TRENDINGS_ERROR",
          payload: error.message,
        });
      });
  };
}

export const trendingsSelector = (state: StoreState) => state.trendings;
