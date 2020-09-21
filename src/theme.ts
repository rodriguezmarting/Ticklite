import { theme } from "@chakra-ui/core";

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
