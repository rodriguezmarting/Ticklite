import React from "react";
import { render, screen, generateQuestionsList } from "../../shared/test-utils";
import { Hashtag } from "./Hashtag";
import { Status } from "../../shared/declarations";

test("renders 'no questions' when there are no questions", () => {
  const hashtag = {
    id: 0,
    title: "#title",
    data: [],
    status: "SUCCESS" as Status,
    error: "",
  };
  render(<Hashtag hashtag={hashtag} />);
  expect(screen.getByText(/no questions/i)).toBeInTheDocument();
});

test("renders 'loading' when the status is LOADING", () => {
  const hashtag = {
    id: 0,
    title: "#title",
    data: [],
    status: "LOADING" as Status,
    error: "",
  };
  render(<Hashtag hashtag={hashtag} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders proper error message when an error ocurred", () => {
  const errorMsg = "failed to load trending";
  const hashtag = {
    id: 0,
    title: "#title",
    data: [],
    status: "ERROR" as Status,
    error: errorMsg,
  };
  render(<Hashtag hashtag={hashtag} />);
  expect(screen.getByText(errorMsg)).toBeInTheDocument();
});

test("renders hashtag", () => {
  const hashtag = {
    id: 0,
    title: "#title",
    data: generateQuestionsList(),
    status: "SUCCESS" as Status,
    error: "",
  };

  render(<Hashtag hashtag={hashtag} />);

  const hashtagTitle = screen.getByText("#title");
  const questionTitles = screen
    .getAllByTestId("question-title")
    .map((p) => p.textContent);

  expect(hashtagTitle).toBeInTheDocument();
  expect(questionTitles).toEqual(hashtag.data.map((q) => q.title));
});
