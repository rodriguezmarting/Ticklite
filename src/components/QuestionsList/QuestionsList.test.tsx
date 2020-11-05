import React from "react";
import { render, screen, generateQuestionsList } from "../../shared/test-utils";
import QuestionsList from "./QuestionsList";
import { Status } from "../../shared/declarations";

test("renders 'no questions' when there are no questions", () => {
  const questions = {
    data: [],
    status: "SUCCESS" as Status,
    error: "",
  };
  render(<QuestionsList questions={questions} />);
  expect(screen.getByText(/no questions/i)).toBeInTheDocument();
});

test("renders 'loading' when the status is LOADING", () => {
  const questions = {
    data: [],
    status: "LOADING" as Status,
    error: "",
  };
  render(<QuestionsList questions={questions} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders proper error message when an error ocurred", () => {
  const errorMsg = "failed to load questions";
  const questions = {
    data: [],
    status: "ERROR" as Status,
    error: errorMsg,
  };
  render(<QuestionsList questions={questions} />);
  expect(screen.getByText(errorMsg)).toBeInTheDocument();
});

test("renders questions", () => {
  const questions = {
    data: generateQuestionsList(),
    status: "SUCCESS" as Status,
    error: "",
  };
  render(<QuestionsList questions={questions} />);
  const questionsTitles = screen
    .getAllByTestId("question-title")
    .map((p) => p.textContent);
  expect(questionsTitles).toEqual(questions.data.map((q) => q.title));
});
