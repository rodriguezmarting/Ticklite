import React from "react";
import { render, screen, fireEvent } from "../../shared/test-utils";
import App from "./App";

test("clicking on footer icons", () => {
  render(<App />);
  const homeSolid = screen.getByTestId(/home-solid-icon/i);
  const trendingOutline = screen.getByTestId(/trending-outline-icon/i);
  const plusIcon = screen.getByTestId(/plus-square-icon/i);
  const pinnedOutline = screen.getByTestId(/pinned-outline-icon/i);
  const profileOutline = screen.getByTestId(/profile-outline-icon/i);
  expect(homeSolid).toBeInTheDocument();
  expect(trendingOutline).toBeInTheDocument();
  expect(plusIcon).toBeInTheDocument();
  expect(pinnedOutline).toBeInTheDocument();
  expect(profileOutline).toBeInTheDocument();
  fireEvent.click(trendingOutline);
  const homeOutline = screen.getByTestId(/home-outline-icon/i);
  const trendingSolid = screen.getByTestId(/trending-solid-icon/i);
  expect(homeSolid).not.toBeInTheDocument();
  expect(trendingOutline).not.toBeInTheDocument();
  expect(homeOutline).toBeInTheDocument();
  expect(trendingSolid).toBeInTheDocument();
});
