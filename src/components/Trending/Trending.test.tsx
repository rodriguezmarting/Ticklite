import React from "react";
import { render, screen, generateTrendingList } from "../../shared/test-utils";
import { TrendingPage } from "./Trending";
import { Status } from "../../shared/declarations";

test("renders 'no trendings' when there are no trendings", () => {
  const trending = {
    data: [],
    status: "SUCCESS" as Status,
    error: "",
  };
  render(<TrendingPage trending={trending} />);
  expect(screen.getByText(/no trendings/i)).toBeInTheDocument();
});

test("renders 'loading' when the status is LOADING", () => {
  const trending = {
    data: [],
    status: "LOADING" as Status,
    error: "",
  };
  render(<TrendingPage trending={trending} />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders proper error message when an error ocurred", () => {
  const errorMsg = "failed to load trending";
  const trending = {
    data: [],
    status: "ERROR" as Status,
    error: errorMsg,
  };
  render(<TrendingPage trending={trending} />);
  expect(screen.getByText(errorMsg)).toBeInTheDocument();
});

test("renders trending", () => {
  const trending = {
    data: generateTrendingList(),
    status: "SUCCESS" as Status,
    error: "",
  };
  render(<TrendingPage trending={trending} />);
  const trendingTitles = screen
    .getAllByTestId("trending-title")
    .map((p) => p.textContent);
  expect(trendingTitles).toEqual(trending.data.map((q) => q.title));
});
