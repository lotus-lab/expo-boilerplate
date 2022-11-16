import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";

import { Provider } from "react-redux";
import { configureAppStore } from "src/store/configureStore";
import DefaultLayout from "src/app/screens/defaultLayout";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { store } = configureAppStore();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <DefaultLayout />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
