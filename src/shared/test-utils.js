/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "./theme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../ducks";
import { Provider } from "react-redux";

const customRender = (
  ui,
  {
    initialState = {},
    store = createStore(reducers, (initialState = {}), applyMiddleware(thunk)),
    ...options
  } = {}
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <CSSReset />
          {children}
        </ThemeProvider>
      </Provider>
    );
  }
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...options,
    }),
    store,
  };
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
