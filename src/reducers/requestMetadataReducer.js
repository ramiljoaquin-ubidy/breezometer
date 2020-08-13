const requestMetadataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_METADATA':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_METADATA_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        success: true,
        errorMsg: '',
      });
    case 'RECEIVE_CITY_ERROR':
      const { message, code, info } = action.payload.errorInfo;
      const { apiTypeInput } = action.payload;
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        errorMsg: message,
        errorCode: code,
        errorInfo: info,
        apiTypeInput,
      });
    default:
      return state;
  }
};

export default requestMetadataReducer;
