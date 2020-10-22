import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { store } from "./ducks/store";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { customTheme, config, GlobalStyles } from "./shared/theme";
import { Global } from "@emotion/core";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ThemeProvider theme={customTheme}>
        <Global styles={GlobalStyles} />
        <CSSReset config={config} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
