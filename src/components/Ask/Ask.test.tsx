import React from "react";
import { render, screen } from "../../shared/test-utils";
import { Ask } from "./Ask";

test("renders and validates fields", () => {
  const fakeCreateQuestion = jest.fn();
  const fakeClearError = jest.fn();
  render(
    <Ask
      error=""
      status="IDLE"
      createQuestion={fakeCreateQuestion}
      clearError={fakeClearError}
    />
  );
  expect(screen.getByPlaceholderText(/ask your question/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/add a description/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/option 1/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/option 2/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /post/i })).toBeInTheDocument();
});

test("renders error alert", () => {
  const fakeCreateQuestion = jest.fn();
  const fakeClearError = jest.fn();
  render(
    <Ask
      error="error"
      status="IDLE"
      createQuestion={fakeCreateQuestion}
      clearError={fakeClearError}
    />
  );
  expect(screen.getByText(/error/i)).toBeInTheDocument();
});
