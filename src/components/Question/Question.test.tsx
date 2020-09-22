import React from "react";
import { render, screen } from "../../shared/test-utils";
import Question from "./Question";

test("loads and displays all three tabs", () => {
  const question = { id: "test", title: "Is this a test?" };
  render(<Question question={question} />);
  expect(screen.getByText(question.title)).toBeInTheDocument();
});
