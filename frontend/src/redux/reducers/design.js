/* eslint-disable import/no-anonymous-default-export */
import * as types from '../actions/designActions';

const initialState = {
  // Get both from local storage here
  designs: [],
  currentDesign: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DESIGNS:
      // Set to local storage here
      return {
        ...state,
        designs: action.payload.designs,
      };
    case types.SET_CURRENT_DESIGN:
      // Set to local storage here
      return {
        ...state,
        currentDesign: action.payload.currentDesign,
      };
    default:
      return state;
  }
}