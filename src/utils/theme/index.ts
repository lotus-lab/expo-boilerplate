import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { Appearance, ColorSchemeName } from "react-native";
import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components/native";

export const useTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  const [colorMode, setColorMode] = useState<ColorSchemeName>("light");
  const [theme, setThem] = useState<DefaultTheme>(
    colorScheme === "light" ? lightTheme : darkTheme
  );
  useEffect(() => {
    Appearance.addChangeListener((value) => {
      if (value.colorScheme === "light") {
        setColorMode(value.colorScheme);
        setThem(lightTheme);
      } else {
        setThem(darkTheme);
        setColorMode("dark");
      }
    });
  });

  return { theme, colorMode };
};
