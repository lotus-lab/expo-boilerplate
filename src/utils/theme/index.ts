import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { Appearance, ColorSchemeName } from "react-native";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectThemeMode } from "src/app/screens/defaultLayout/slice/selectors";
import { useDefaultLayoutSlice } from "src/app/screens/defaultLayout/slice";

export const useTheme = () => {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();
  const { actions } = useDefaultLayoutSlice();

  const [colorMode, setColorMode] = useState<ColorSchemeName>(themeMode);
  console.log(themeMode);
  const handleThemeChange = (value: ColorSchemeName) => {
    setColorMode(value);
    if (value === "light") {
      dispatch(actions.changeTheme(lightTheme));
    } else {
      dispatch(actions.changeTheme(darkTheme));
    }
  };
  useEffect(() => {
    handleThemeChange(themeMode);

    Appearance.addChangeListener((value) => {
      handleThemeChange(value.colorScheme);
    });
  }, [themeMode, dispatch]);

  return { colorMode };
};
