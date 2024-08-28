
import * as actions from './actions';
import * as coreActions from '../core/actions';

import {
  call,
  put,
  take,
} from 'redux-saga/effects';
import { backendFetchData } from '../../store/backend';


function* watchCustomTargets() {
  while (true) {
    const { targets } = yield take(actions.SEND_TARGETS);
    let err,
      result = null;
    try {
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

function* watchFetchTargets() {
  while(true)  {
    const { targets } = yield take(actions.SEND_TARGETS);
    let err,
      result = null;
    try {
      result = yield call(backendFetchData, {
        query: 'ide.send_command',
        params: [ 'get_custom_targets', targets ],
      });
    } catch (_err) {
      err = _err;
      console.error('Error in Fetching the targets for project:', err);
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
  watchCustomTargets,
  watchFetchTargets
];