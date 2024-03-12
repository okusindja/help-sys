import { DefaultTheme } from "react-native-paper";

export const theme = {
  colors: {
    primary: "#FFC423",
    secondary: "#D9D9D9",
  },
  fonts: {
    primary: "Roboto",
    secondary: "Roboto",
  },
};

export type ThemeType = typeof theme;

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    secondaryContainer: "transparent",
  },
};
