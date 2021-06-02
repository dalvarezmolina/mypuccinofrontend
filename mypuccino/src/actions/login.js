import * as types from '../types/login';


export const userLogin = ({
  username,
  password,
}) => ({
  type: types.USER_LOGGED,
  payload:{
    username,
    password,
  }
});

export const userLoginSuccess = ({
  id,
  username,
  token,
  permissions,
  views,
  role
}) => ({
  type: types.USER_LOGGED_SUCCEDED,
  payload:{
    id,
    username,
    token,
    permissions, 
    views,
    role
  }
});

export const userLoginFail = ({
  message,
}) => ({
  type: types.USER_LOGGED_FAILED,
  payload:{
    message,
  }
});


export const fetchSummary = ({
  dateI,
}) => ({
  type: types.SUMMARY_REQUESTED,
  payload: {
    dateI,
  }
});

export const fetchSummarySuccess = ({
  incomes,
  outcomes,
}) => ({
  type: types.SUMMARY_REQUESTED_SUCCEDED,
  payload: {
    incomes,
    outcomes,
  }
});

export const fetchSummaryFail = ({
  message,
}) => ({
  type: types.SUMMARY_REQUESTED_FAILED,
  payload: {
    message,
  }
});



export const userLogout = () => ({
  type: types.USER_UNLOGGED,
  payload:{
    
  }
});

export const userLogoutSuccess = () => ({
  type: types.USER_UNLOGGED_SUCCEDED,
  payload:{

  }
});

export const userLogoutFail = ({
  message,
}) => ({
  type: types.USER_UNLOGGED_FAILED,
  payload:{
    message,
  }
});
  

export const selectStation = ({
  station,
}) => ({
  type: types.STATION_SELECTED,
  payload:{
    station,
  }
});
