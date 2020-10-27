import { theme, ITheme } from "@chakra-ui/core";
import "focus-visible/dist/focus-visible";
import { css } from "@emotion/core";

export const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      200: "#9baee4",
      400: "#4f76ca",
      600: "#283b8a",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    mono: "Montserrat, sans-serif",
  },
};

// This app will be dark by default for now
// both modes will be the same
export const config = (theme: ITheme) => ({
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
