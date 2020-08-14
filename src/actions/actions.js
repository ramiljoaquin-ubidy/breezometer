import axios from 'axios';
import { loadState } from '../persistence/localStorage';

const KEY = '6fcde45e6983467587219d5c9e000145';

const persistedState = loadState();

export const addMetadata = (data) => ({
  type: 'ADD_METADATA',
  payload: {
    data,
  },
});

export const requestMetadata = (airQualityAPI) => ({
  type: 'REQUEST_METADATA',
  payload: airQualityAPI,
});

export const receiveMetadata = (airQualityAPI) => ({
  type: 'RECEIVE_METADATA_SUCCESS',
  payload: {
    metadata: airQualityAPI,
  },
});

export const receiveAirQualityError = (errorInfo, airQualityAPI) => ({
  type: 'RECEIVE_AIRQUALITY_ERROR',
  payload: {
    errorInfo,
    airQualityAPI,
  },
});

export function fetchConditionsMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'current-conditions';
    dispatch(requestMetadata(airQualityAPI));
    const url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=14.5548&lon=121.0476&key=${KEY}&metadata=true&features=breezometer_aqi`;
    axios
      .get(url)
      .then((response) => {
        dispatch(receiveMetadata(airQualityAPI));
        let data = response.data;
        if (data.data.data_available && airQualityAPI == 'current-conditions') {
          dispatch(addMetadata(data.data));
        }
      })
      .catch(function (error) {
        let errorInfo = error.response.data.error;
        dispatch(receiveAirQualityError(errorInfo, airQualityAPI));
      });
  };
}

export function fetchForecastMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'forecast/hourly';
    dispatch(requestMetadata(airQualityAPI));
    const url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    axios
      .get(url)
      .then((response) => {
        dispatch(receiveMetadata(airQualityAPI));
        let data = response.data;
        if (data.error == null) {
          dispatch(addMetadata(data.data));
        }
      })
      .catch(function (error) {
        let errorInfo = error.response.data.error;
        dispatch(receiveAirQualityError(errorInfo, airQualityAPI));
      });
  };
}

export function fetchHistoricalMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'historical/hourly';
    dispatch(requestMetadata(airQualityAPI));
    const url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=14.5548&lon=121.0476&key=${KEY}&features=breezometer_aqi&hours=8`;
    axios
      .get(url)
      .then((response) => {
        dispatch(receiveMetadata(airQualityAPI));
        let data = response.data;
        if (data.error == null) {
          dispatch(addMetadata(data.data));
        }
      })
      .catch(function (error) {
        let errorInfo = error.response.data.error;
        dispatch(receiveAirQualityError(errorInfo, airQualityAPI));
      });
  };
}
