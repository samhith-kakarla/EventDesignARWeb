/* eslint-disable import/no-anonymous-default-export */
import * as types from '../actions/designActions';

const initialState = {
  designs: JSON.parse(localStorage.getItem('designs')) || [],
  currentDesign: JSON.parse(localStorage.getItem('currentDesign')) || {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DESIGNS:
      localStorage.setItem('designs', JSON.stringify(action.payload.designs));
      return {
        ...state,
        designs: action.payload.designs,
      };
    case types.SET_CURRENT_DESIGN:
      localStorage.setItem('currentDesign', JSON.stringify(action.payload.design));
      return {
        ...state,
        currentDesign: action.payload.design,
      };
    default:
      return state;
  }
}