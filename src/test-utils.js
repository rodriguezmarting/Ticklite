/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
