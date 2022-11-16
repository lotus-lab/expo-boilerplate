// /**
//  * Create the store with dynamic reducers
//  */

// import {
//   configureStore,
//   getDefaultMiddleware,
//   StoreEnhancer,
// } from "@reduxjs/toolkit";
// import { createInjectorsEnhancer } from "redux-injectors";
// import createSagaMiddleware from "redux-saga";
// import { createReducer } from "./reducers";
// import { persistStore, persistReducer, PersistConfig } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export function configureAppStore() {
//   const persistConfig: PersistConfig<any> = {
//     key: "root",
//     storage: AsyncStorage,
//     whitelist: ["defaultLayout"],
//   };
//   const reduxSagaMonitorOptions = {};
//   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
//   const { run: runSaga } = sagaMiddleware;
//   // Create the store with saga middleware
//   const persistedReducer = persistReducer(persistConfig, createReducer());
//   const middlewares = [sagaMiddleware];

//   const enhancers = [
//     createInjectorsEnhancer({
//       createReducer,
//       runSaga,
//     }),
//   ] as StoreEnhancer[];

//   const store = configureStore({
//     reducer: persistedReducer,
//     middleware: [
//       ...getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//       ...middlewares,
//     ],
//     devTools: process.env.NODE_ENV !== "production",
//     enhancers,
//   });
//   let persistor = persistStore(store);
//   return { store, persistor };
// }

/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
// import { NODE_ENV } from '@env';
import { createReducer } from "./reducers";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  PersistConfig,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Combined reducers
  const reducer = createReducer();

  // Redux persist
  const persistConfig: PersistConfig<any> = {
    key: "root",
    storage: AsyncStorage,
    // whitelist: ["defaultLayout"],
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
      }),
      ...middlewares,
    ],

    enhancers,
  });

  const persistor = persistStore(store);

  return { store, persistor };
}
