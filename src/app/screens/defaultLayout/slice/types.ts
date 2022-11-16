import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components/native";

/* --- STATE --- */
export interface DefaultLayoutState {
  theme: DefaultTheme;
  themeMode: ColorSchemeName;
}
