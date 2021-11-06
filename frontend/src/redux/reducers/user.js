/* eslint-disable import/no-anonymous-default-export */
import * as types from '../actions/userActions';

const initialState = {
  userId: JSON.parse(localStorage.getItem('userId')) || null,
  fullName: JSON.parse(localStorage.getItem('fullName')) || null,
  email: JSON.parse(localStorage.getItem('email')) || null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER:
      localStorage.setItem('userId', JSON.stringify(action.payload.userId));
      localStorage.setItem('fullName', JSON.stringify(action.payload.fullName));
      localStorage.setItem('email', JSON.stringify(action.payload.email));
      return {
        ...state,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };
    case types.UNSET_USER:
      localStorage.clear();
      return {
        ...state,
        userId: null,
        fullName: null,
        email: null,
      };
    default:
      return state;
  }
};
