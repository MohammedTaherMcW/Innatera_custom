
import * as actions from './actions';
import * as coreActions from '../core/actions';

import {
  call,
  delay,
  put,
  race,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import React from 'react';
import ReactGA from 'react-ga';
import { backendFetchData } from '../../store/backend';


function* watchCustomTargets() {
  while (true) {
    const { targets } = yield take(actions.SEND_TARGETS);
    let err,
      result = null;
    try {
      console.log("Targets",targets);
      result = yield call(backendFetchData, {
        query: 'targets.fetch',
        params: [ targets ],
      });
    } catch (_err) {
      err = _err;
      console.error('Error in Fetching the targets for project:', err);

      yield put(coreActions.notifyError(
        'Could not fetch the targets for project',
      ));
    } finally {
      if (result) {
        yield put(
          coreActions.notifySuccess(
            'Target has been Successfully fetched',
          )
        );
      }
    }
  }
}


export default [
  watchCustomTargets
]