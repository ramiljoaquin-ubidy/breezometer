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

export const requestMetadata = (userInput) => ({
  type: 'REQUEST_METADATA',
  payload: userInput,
});

export const receiveMetadata = (userInput) => ({
  type: 'RECEIVE_METADATA_SUCCESS',
  payload: {
    metadata: userInput,
  },
});

export const receiveCityError = (errorInfo, userInput) => ({
  type: 'RECEIVE_CITY_ERROR',
  payload: {
    errorInfo,
    userInput,
  },
});

export function fetchMetadata(userInput) {
  return function (dispatch) {
    let url = 'current-conditions';
    dispatch(requestMetadata(userInput));
    if (userInput == 'current-conditions')
      url = `https://api.breezometer.com/air-quality/v2/${userInput}?lat=14.5548&lon=121.0476&key=${KEY}&metadata=true&features=breezometer_aqi`;
    if (userInput == 'forecast/hourly')
      url = `https://api.breezometer.com/air-quality/v2/${userInput}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    if (userInput == 'historical/hourly')
      url = `https://api.breezometer.com/air-quality/v2/${userInput}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    axios
      .get(url)
      .then((response) => {
        dispatch(receiveMetadata(userInput));
        let data = response.data;
        console.log('console', JSON.stringify(data.data));
        if (data.data.data_available) {
          // debugger;
          let data = {
            dateTime: data.data.datetime,
            //...data.data.indexes.baqi,
            displayName: data.data.indexes.baqi.display_name || '',
            aqi: data.data.indexes.baqi.aqi || '',
            aqiDisplay: data.data.indexes.baqi.aqi_display || '',
            color: data.data.indexes.baqi.breezometer_color || '',
            category: data.data.indexes.baqi.category || '',
            dominantPollutant: data.data.indexes.baqi.dominant_pollutant || '',
          };
          // dispatch(addMetadata(metadataInfo));
        }
        // debugger;
        if (data.error == null) {
          // debugger;
          //let metadataInfo = { ...data.data };
          // debugger;
          dispatch(addMetadata(data.data));
        }
      })
      .catch(function (error) {
        // debugger;
        let errorInfo = error.response.data.error;
        dispatch(receiveCityError(errorInfo, userInput));
      });
  };
}
