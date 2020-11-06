/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../ducks/store";
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

export const generateTrending = (numberOfQuestions = 4) => {
  return {
    id: faker.random.number(1000),
    title: faker.name.title(),
    interactions: faker.random.number({ min: 100000 }),
    topQuestions: generateQuestionsList(numberOfQuestions),
  };
};

export const generateTrendingList = (
  numberOfTrendings = 4,
  questionsPerTrending
) => {
  const trendings = [];
  for (let i = 0; i < numberOfTrendings; i++) {
    const trending = generateTrending(questionsPerTrending);
    trendings.push(trending);
  }
  return trendings;
};
