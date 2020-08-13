import { combineReducers } from 'redux';

import requestMetadataReducer from './requestMetadataReducer';
import addMetadataReducer from './addMetadataReducer';

const rootReducer = combineReducers({
  appStatus: requestMetadataReducer,
  metadataArray: addMetadataReducer,
});

export default rootReducer;
