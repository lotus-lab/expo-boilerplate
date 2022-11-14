import { PayloadAction } from '@reduxjs/toolkit';
import routes from 'app/API/api.routes';
import makeCall from 'app/API/makeCalls';
import { call, put, takeLatest } from 'redux-saga/effects';
import { farmerDetailActions as actions } from '.';
import { IFarmerDetailsResponse } from './types';

function* getFarmerSaga(action: PayloadAction<string>) {
  try {
    const id = action.payload;
    const response: IFarmerDetailsResponse = yield call(makeCall, {
      method: 'GET',
      isSecureRoute: true,
      route: `${routes.farmers.get}${id}`,
    });
    if (response) {
      yield put(actions.setFarmer(response));
    } else {
      yield put(actions.setGettingFarmer(false));
    }
  } catch (error) {
    yield put(actions.setGettingFarmer(false));
  }
}

export function* farmerDetailsSaga() {
  yield takeLatest(actions.getFarmer.type, getFarmerSaga);
}
