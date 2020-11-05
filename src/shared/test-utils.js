/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../ducks";
import { Provider } from "react-redux";
import faker from "faker";

const customRender = (
  ui,
  {
    initialState = {},
    store = createStore(reducers, (initialState = {}), applyMiddleware(thunk)),
    ...options
  } = {}
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          {children}
        </ThemeProvider>
      </Provider>
    );
  }
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...options,
    }),
    store,
  };
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };

// GENERATORS!
export const generateQuestion = () => {
  return {
    id: faker.random.number(1000),
    title: faker.name.title(),
    options: [faker.name.findName(), faker.name.findName()],
    caption: faker.name.title(),
    authorId: faker.random.number(1000),
    authorName: faker.name.findName(),
    pins: faker.random.number(),
    isPinned: faker.random.boolean(),
    isAnswered: faker.random.boolean(),
    createdAt: faker.date.past(),
    answeredAt: faker.date.past(),
  };
};

export const generateQuestionsList = (numberOfQuestions = 4) => {
  const questions = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    const question = generateQuestion();
    questions.push(question);
  }
  return questions;
};
