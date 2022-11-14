import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.farmerDetails || initialState;

export const selectFarmer = createSelector(
  [selectSlice],
  state => state.farmerDetail,
);
