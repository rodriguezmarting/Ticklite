import React from "react";
import { render, screen, generateQuestion } from "../../shared/test-utils";
import Question from "./Question";

test("Loads and displays a question", () => {
  const question = generateQuestion();
  render(<Question question={question} />);
  expect(screen.getByText(question.title)).toBeInTheDocument();
});
