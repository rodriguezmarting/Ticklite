import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset, ITheme } from "@chakra-ui/core";
import { customTheme } from "../../shared/theme";
import HomeContainer from "../Home/Home";

// This app will be dark by default for now
// both modes will be the same
const config = (theme: ITheme) => ({
  light: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset config={config} />
      <Router>
        <Switch>
          <Route path="/" component={HomeContainer} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
