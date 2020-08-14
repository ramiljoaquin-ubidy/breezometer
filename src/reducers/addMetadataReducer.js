//import * as ActionTypes from '../actions';
import { ADD_METADATA } from '../actions';
const initialState = [];

const addMetadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_METADATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addMetadataReducer;
