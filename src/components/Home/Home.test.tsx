import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("loads and displays home", () => {
  render(<Home />);
  expect(screen.getByText(/hi/i)).toBeInTheDocument();
});
