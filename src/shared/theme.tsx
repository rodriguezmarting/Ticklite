import { theme, ITheme } from "@chakra-ui/core";

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
