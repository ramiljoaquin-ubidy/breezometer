import * as ActionTypes from '../actions';
const requestMetadataReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_METADATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ActionTypes.RECEIVE_METADATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
        errorMsg: '',
      });
    case ActionTypes.RECEIVE_AIRQUALITY_ERROR:
      const { message, code, info } = action.payload.errorInfo;
      const { airQualityAPI } = action.payload;
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        errorMsg: message,
        errorCode: code,
        errorInfo: info,
        airQualityAPI,
      });
    default:
      return state;
  }
};

export default requestMetadataReducer;
