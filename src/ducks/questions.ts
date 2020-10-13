import { Dispatch } from "redux";
import api from "../shared/axios";

type Action = FetchQuestionsAction;
const FETCH_QUESTIONS_ENDPOINT = "/questions";

export enum ActionTypes {
  fetchQuestions,
}

export default function reducer(state: IQuestion[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.fetchQuestions:
      return action.payload;
    default:
      return state;
  }
}

export interface IQuestion {
  id: string;
  title: string;
}

export interface FetchQuestionsAction {
  type: ActionTypes.fetchQuestions;
  payload: IQuestion[];
}

export function fetchQuestions() {
  return async (dispatch: Dispatch) => {
    const response = await api.get<IQuestion[]>(FETCH_QUESTIONS_ENDPOINT);
    dispatch<FetchQuestionsAction>({
      type: ActionTypes.fetchQuestions,
      payload: response.data,
    });
  };
}
