import * as types from '../types/users';

export const fetchUsers = () => ({
  type: types.USERS_FETCHED,
  payload: {

  }
});

export const fetchUsersSuccess = ({
  users,
}) => ({
  type: types.USERS_FETCHED_SUCCEDDED,
  payload: {
    users
  }
});

export const fetchUsersFail = ({
  message,
}) => ({
  type: types.USERS_FETCHED_FAILED,
  payload: {
    message,
  }
});
