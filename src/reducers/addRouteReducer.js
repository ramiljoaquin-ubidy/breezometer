//import * as ActionTypes from '../actions';
import { ADD_ROUTE } from '../actions';
const initialState = [];

const addRouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROUTE:
      return [action.payload];
    default:
      return state;
  }
};

export default addRouteReducer;
