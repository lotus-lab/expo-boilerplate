import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from "redux-injectors";
import {
  InjectReducerParams,
  InjectSagaParams,
  RootStateKeyType,
} from "./types/injector-typings";
import { configureAppStore } from "src/store/configureStore";

/* Wrap redux-injectors with stricter types */

export function useInjectReducer<Key extends RootStateKeyType>(
  params: InjectReducerParams<Key>
) {
  const { store, reducer } = configureAppStore();
  store.replaceReducer(reducer);
  store.persistor.persist();
  return useReducer(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSaga(params);
}
