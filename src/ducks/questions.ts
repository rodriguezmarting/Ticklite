import { Dispatch } from "redux";
import api from "../shared/axios";
import { StoreState } from ".";
import { createSelector } from "reselect";

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

// TODO: This is a simple test to Reselect, probably will be removed.
const questionsSelector = (state: StoreState) => state.questions;
export const selectQuestions = createSelector(questionsSelector, (questions) =>
  questions.map((q: IQuestion) => ({ id: q.id, title: q.title }))
);
