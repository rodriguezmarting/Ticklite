import React from "react";
import { render, screen } from "../../shared/test-utils";
import Home from "./Home";

test("renders both tabs", () => {
  render(<Home />);
  expect(screen.getByText(/following/i)).toBeInTheDocument();
  expect(screen.getByText(/discover/i)).toBeInTheDocument();
});
