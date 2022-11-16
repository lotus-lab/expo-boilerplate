import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import useCachedResources from "src/utils/hooks/useCachedResources";

import { Provider } from "react-redux";
import { configureAppStore } from "src/store/configureStore";
import DefaultLayout from "src/app/screens/defaultLayout";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { store, persistor } = configureAppStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <DefaultLayout />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
