import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";
import useColorScheme from "src/utils/hooks/useColorScheme";
import Navigation from "src/navigation";
import { ThemeProvider } from "styled-components/native";

import { useTheme } from "src/utils/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { colorMode, theme } = useTheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorMode} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
