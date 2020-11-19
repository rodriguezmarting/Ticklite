import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./ducks/store";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { customTheme, GlobalStyles } from "./shared/theme";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/ErrorFallBack/ErrorFallBack";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <ChakraProvider theme={customTheme}>
        <Global styles={GlobalStyles} />
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <App />
        </ErrorBoundary>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
