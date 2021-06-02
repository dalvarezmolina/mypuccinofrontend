import { combineReducers } from 'redux';
import * as types from '../types/users';

const stateShape = {
};

const users = (state = stateShape, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

/*
forma

{
  [1]: {
    id: 1,
    name: 'Andrew Mike',
    email: 'andrew@gmail.com',
    phone: '1234-1234',
    saldo: '99,225',
  }
}

*/

const byId = (state={}, action) => {
  switch (action.type) {
    case types.USERS_FETCHED_SUCCEDDED: {
      const {
        payload: {
          users,
        },
      } = action;
      const newState = {}
      for (let i in users) {
        newState[users[i].id] = {
          ...users[i],

        }
      }
      return newState;
    }
    
    default: {
      return state;
    }
  }
}

/*
forma
[
  1,
]
*/

const order = (state=[], action) => {
  switch (action.type) {
    case types.USERS_FETCHED_SUCCEDDED: {
      const {
        payload: {
            users,
        },
      } = action;
      const newState = Object.values(users).map((alert) => alert.id);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  users,
  byId,
  order
})

//selectores
export const getUsers = (state, id) => state.byId[id] || undefined; 
export const getAllUsers = (state) => state.order.map((id) => getUsers(state, id))

