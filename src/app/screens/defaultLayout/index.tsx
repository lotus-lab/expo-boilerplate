import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";

import Navigation from "src/navigation";
import { ThemeProvider } from "styled-components/native";

import { useTheme } from "src/utils/theme";
import { useSelector } from "react-redux";
import { selectTheme } from "./slice/selectors";

export default function DefaultLayout() {
  const theme = useSelector(selectTheme);
  const isLoadingComplete = useCachedResources();
  const { colorMode } = useTheme();
  console.log(theme);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navigation colorScheme={colorMode} />
        <StatusBar />
      </ThemeProvider>
    );
  }
}
