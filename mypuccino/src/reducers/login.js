import * as types from '../types/login';

const stateShape = {
  id: undefined,
  name: undefined,
  username: undefined,
  last_name: undefined,
  selected_station: undefined,
  token: undefined,
  permissions: undefined,
  stations: undefined,
  views: undefined
};
export default (state = stateShape, action) => {
  switch (action.type) {
    case types.USER_LOGGED_SUCCEDED: {
      const {
        payload: {
          id,
          username,
          token,
          permissions,
          views,
          role
        },
      } = action;
 
      return {
        ...state,
        id,
        username,
        token,
        permissions,
        views,
        role
      };
    }
    case types.STATION_SELECTED: {
      const {
        payload: {
          station
        },
      } = action;
      return {
        ...state,
        selected_station: station,
        stations: undefined,
      }
    }
    case types.USER_LOGGED_FAILED:
    case types.USER_UNLOGGED_FAILED:
    case types.USER_UNLOGGED_SUCCEDED: {
      return stateShape;
    }
    default: {
      return state
    }
  }
};


export const isUserAuthenticated = (state) => state.token;
export const getUserToken = (state) => state.token;
//export const getUserMessage = (state) => `${state.name} ${state.lastName}, ${state.selected_station.name}`
//export const getUserViews = (state) => state.views;
export const getUserAuthorization = (state) => state.permissions;
export const getUserViews = (state) => state.views;
export const getUserRole = (state) => state.role;
export const getUserPermissions = (state) => state.permissions;
export const getAllStations = (state) => state.stations;
export const getStations_Selected = (state) => state.selected_station ? state.selected_station.id: undefined;
