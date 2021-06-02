import {
  put,
  takeLatest,
  call,
  select,
} from 'redux-saga/effects';
import * as types from '../types/login';
import * as actions from '../actions/login';
import * as modalActions from '../actions/modal';
import * as api from '../apis/login';
import { getUserToken, getStations_Selected } from '../reducers';

function* doLogin(action) {
  const {
    payload: {
      username,
      password,
    },
  } = action;
  try {
    const response = yield call(
      api.doLogin,
      username,
      password,
    );
    yield put(actions.userLoginSuccess({
      id: response.user_id,
      name: response.name,
      username: response.username,
      token: response.token,
      permissions: response.permissions,
      views: response.views,
      role: response.role
    }));
  } catch (error) {
    yield put(modalActions.showError({
      title: 'hubo un error',
      message: error.message,
    }));
    yield put(actions.userLoginFail({
      message: error.message,
    }));
  }
}


function* Dologout() {
  const token = yield select(getUserToken);
  try {
    yield call(
      api.doLogoff,
      token,
    );  

    yield put(actions.userLogoutSuccess());
  } catch (error) {
    yield put(actions.userLogoutSuccess());
    yield put(actions.userLogoutFail({
      message: error.message,
    }));
  }
}

function* summaryFetcher(action) {
  const token = yield select(getUserToken);
  const {
    payload:{
      dateI
    }
  } = action;
  try {
    const {response, logout} = yield call(
      api.fetchSummary,
      token,
      dateI,
    );  
    if (logout) {
      yield put(actions.userLogout())
    } else {
      yield put(actions.fetchSummarySuccess({
        incomes: response.incomes,
        outcomes: response.outcomes,
      }));
    }
  } catch (error) {
    yield put(actions.fetchSummaryFail({
      message: error.message,
    }));
  }
}



function* LoginSaga() {
  yield takeLatest(
    types.USER_LOGGED,
    doLogin,
  );
  yield takeLatest(
    types.USER_UNLOGGED,
    Dologout,
  );
  yield takeLatest(
    types.SUMMARY_REQUESTED,
    summaryFetcher,
  );
}

export default LoginSaga;
