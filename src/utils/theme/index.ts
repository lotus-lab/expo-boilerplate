import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { Appearance, ColorSchemeName } from "react-native";
import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "src/app/screens/defaultLayout/slice/selectors";
import { useDefaultLayoutSlice } from "src/app/screens/defaultLayout/slice";

export const useTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const { actions } = useDefaultLayoutSlice();
  const colorScheme = Appearance.getColorScheme();
  const [colorMode, setColorMode] = useState<ColorSchemeName>("light");

  useEffect(() => {
    Appearance.addChangeListener((value) => {
      if (value.colorScheme === "light") {
        setColorMode(value.colorScheme);
        dispatch(actions.changeTheme(lightTheme));
      } else {
        dispatch(actions.changeTheme(darkTheme));
        setColorMode("dark");
      }
    });
  }, [colorScheme, dispatch]);

  return { theme, colorMode };
};
