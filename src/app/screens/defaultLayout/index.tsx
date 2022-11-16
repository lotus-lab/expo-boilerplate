import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";

import Navigation from "src/navigation";
import { ThemeProvider } from "styled-components/native";

import { useTheme } from "src/utils/theme";

export default function DefaultLayout() {
  const isLoadingComplete = useCachedResources();
  const { colorMode, theme } = useTheme();

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
