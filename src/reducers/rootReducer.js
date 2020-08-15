import { combineReducers } from 'redux';

import requestMetadataReducer from './requestMetadataReducer';
import addMetadataReducer from './addMetadataReducer';
import addRouteReducer from './addRouteReducer';

const rootReducer = combineReducers({
  appStatus: requestMetadataReducer,
  metadataArray: addMetadataReducer,
  routeArray: addRouteReducer,
});

export default rootReducer;
