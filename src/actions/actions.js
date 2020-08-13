import axios from 'axios';
import { loadState } from '../persistence/localStorage';

const KEY = '6fcde45e6983467587219d5c9e000145';

const persistedState = loadState();
let id = persistedState ? persistedState.metadataArray.length : 0;

export const addMetadata = (data) => ({
  type: 'ADD_METADATA',
  payload: {
    data,
  },
});

export const requestMetadata = (apiTypeInput) => ({
  type: 'REQUEST_METADATA',
  payload: apiTypeInput,
});

export const receiveMetadata = (apiTypeInput) => ({
  type: 'RECEIVE_METADATA_SUCCESS',
  payload: {
    metadata: apiTypeInput,
  },
});

export const receiveCityError = (errorInfo, apiTypeInput) => ({
  type: 'RECEIVE_CITY_ERROR',
  payload: {
    errorInfo,
    apiTypeInput,
  },
});

export function fetchMetadata(apiTypeInput) {
  return function (dispatch) {
    let url = 'current-conditions';
    dispatch(requestMetadata(apiTypeInput));
    if (apiTypeInput == 'current-conditions')
      url = `https://api.breezometer.com/air-quality/v2/${apiTypeInput}?lat=14.5548&lon=121.0476&key=${KEY}&metadata=true&features=breezometer_aqi`;
    if (apiTypeInput == 'forecast/hourly')
      url = `https://api.breezometer.com/air-quality/v2/${apiTypeInput}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    if (apiTypeInput == 'historical/hourly')
      url = `https://api.breezometer.com/air-quality/v2/${apiTypeInput}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    axios
      .get(url)
      .then((response) => {
        dispatch(receiveMetadata(apiTypeInput));
        let data = response.data;
        if (data.data.data_available && apiTypeInput == 'current-conditions') {
          dispatch(addMetadata(data.data));
        }
        if (
          data.error == null &&
          (apiTypeInput == 'forecast/hourly' ||
            apiTypeInput == 'historical/hourly')
        ) {
          dispatch(addMetadata(data.data));
        }
      })
      .catch(function (error) {
        let errorInfo = error.response.data.error;
        dispatch(receiveCityError(errorInfo, apiTypeInput));
      });
  };
}
