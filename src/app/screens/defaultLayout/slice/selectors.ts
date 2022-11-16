import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/types";
import { DefaultTheme } from "styled-components/native";
import { initialState } from ".";
import { DefaultLayoutState } from "./types";

const selectSlice = (state: RootState) => state?.defaultLayout || initialState;

export const selectDefaultLayout: (state: RootState) => DefaultLayoutState =
  createSelector([selectSlice], (state) => state);

export const selectTheme: (state: RootState) => DefaultTheme = createSelector(
  [selectDefaultLayout],
  (state) => state?.theme
);
