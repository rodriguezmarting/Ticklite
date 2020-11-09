import React from "react";
import { render, screen } from "../../shared/test-utils";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ErrorFallBack";

it('renders "Something went wrong." when an error is thrown', () => {
  const spy = jest.spyOn(console, "error");
  spy.mockImplementation(() => {});

  const Throw = () => {
    throw new Error("bad");
  };

  render(
    <ErrorBoundary FallbackComponent={ErrorFallBack}>
      <Throw />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  expect(screen.getByText(/bad/i)).toBeInTheDocument();

  spy.mockRestore();
});
