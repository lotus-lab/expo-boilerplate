import { PayloadAction } from "@reduxjs/toolkit";
import { Appearance, ColorSchemeName } from "react-native";
import { createSlice } from "src/utils/@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "src/utils/redux-injectors";
import { lightTheme } from "src/utils/theme/lightTheme";
import { DefaultTheme } from "styled-components/native";
import { defaultLayoutSaga } from "./saga";
import { DefaultLayoutState } from "./types";

export const initialState: DefaultLayoutState = {
  theme: lightTheme,
  themeMode: "light",
};

const slice = createSlice({
  name: "defaultLayout",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
    },
    changeThemeMode: (state, action: PayloadAction<ColorSchemeName>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { actions: defaultLayoutActions } = slice;

export const useDefaultLayoutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: defaultLayoutSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useDefaultLayoutSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
