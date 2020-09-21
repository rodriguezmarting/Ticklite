import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { customTheme } from "../../theme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/">Hi</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
