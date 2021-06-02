import {
    put,
    takeLatest,
    call,
    all,
    select,
} from 'redux-saga/effects';
import * as types from '../types/users';
import * as actions from '../actions/user';
import * as api from '../apis/user';
import * as loginActions from '../actions/login';
import { getUserToken, getStations_Selected } from '../reducers';
import * as modalActions from '../actions/modal';

function* usersFetcher() {
  const token = yield select(getUserToken);
  try {
    
    const { response, logout } = yield call(
      api.fetchUsers,
      token,
    );
    if (logout) {
      yield put(loginActions.userLogout())
    } else {
      yield put(actions.fetchUsersSuccess({
        users: response,
      }));
    }
  } catch (error) {
    yield put(actions.fetchUsersFail({
      message: error.message,
    }));
  }
}



function* UsersSaga() {
    yield takeLatest(
      types.USERS_FETCHED,
      usersFetcher,
    );
  
  }
  
  export default UsersSaga;