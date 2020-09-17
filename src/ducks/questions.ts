import { Dispatch } from "redux";

type Action = FetchQuestionsAction;

export enum ActionTypes {
  fetchQuestions,
}

export default function reducer(state: Question[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.fetchQuestions:
      return action.payload;
    default:
      return state;
  }
}

export interface Question {
  id: string;
  title: string;
}

export interface FetchQuestionsAction {
  type: ActionTypes.fetchQuestions;
  payload: Question[];
}

// TODO: Create a fake backend
// export function fetchQuestions() {
//   return async (dispatch: Dispatch) => {
//     const response = await fetch(URL);
//     dispatch<FetchQuestionsAction>( {
//       type: ActionTypes.fetchQuestions,
//       payload: response.data
//     });
//   };
// }
