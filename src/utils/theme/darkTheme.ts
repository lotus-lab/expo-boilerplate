import { DefaultTheme } from "styled-components/native";
import { lightTheme } from "./lightTheme";

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    text: "#FFF",
    background: "#000",
    primary: "#6690FF",
    secondary: "#F48675",
    success: "#C0EF42",
  },
};
