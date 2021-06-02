import { fork, all } from 'redux-saga/effects';
import LoginSaga from './login';
import UsersSaga from './user';

function* mainSaga() {
  yield all([
    fork(LoginSaga),
    fork(UsersSaga),
  ]);
}

export default mainSaga;
