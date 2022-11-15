import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";
import useColorScheme from "src/utils/hooks/useColorScheme";
import Navigation from "src/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "src/utils/theme/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
