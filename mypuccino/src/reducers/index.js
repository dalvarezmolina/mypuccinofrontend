import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';

import login, * as fromLogin from './login';
import users, * as fromUsers from './user'

export default combineReducers({
  login,
  users,
  form: reducerForm,
});

//login
export const isUserAuthenticated = (state) => fromLogin.isUserAuthenticated(state.login);
export const getUserToken = (state) => fromLogin.getUserToken(state.login);
export const getUserRole = (state) => fromLogin.getUserRole(state.login);
export const getUserAuthorization = (state) => fromLogin.getUserAuthorization(state.login);
export const getUserPermissions = (state) => fromLogin.getUserPermissions(state.login);
export const getUserViews = (state) => fromLogin.getUserViews(state.login);
//export const getUserMessage = (state) => fromLogin.getUserMessage(state.login);

export const getAllStations = (state) => fromLogin.getAllStations(state.login);
export const getStations_Selected = (state) =>fromLogin.getStations_Selected(state.login);
//users
export const getAllUsers = (state) => fromUsers.getAllUsers(state.users)
export const getUsers = (state) => fromUsers.getUsers(state.users)

