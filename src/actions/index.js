import axios from 'axios';
import routes from '../routes/routes.json';
export const ADD_ROUTE = 'ADD_ROUTE';
export const ADD_METADATA = 'ADD_METADATA';
export const REQUEST_METADATA = 'REQUEST_METADATA';
export const RECEIVE_METADATA_SUCCESS = 'RECEIVE_METADATA_SUCCESS';
export const RECEIVE_AIRQUALITY_ERROR = 'RECEIVE_AIRQUALITY_ERROR';

const KEY = '6fcde45e6983467587219d5c9e000145';

export const addRoute = (data) => ({
  type: ADD_ROUTE,
  payload: {
    data,
  },
});

export const addMetadata = (data) => ({
  type: ADD_METADATA,
  payload: {
    data,
  },
});

export const requestMetadata = (airQualityAPI) => ({
  type: REQUEST_METADATA,
  payload: airQualityAPI,
});

export const receiveMetadata = (airQualityAPI) => ({
  type: RECEIVE_METADATA_SUCCESS,
  payload: {
    metadata: airQualityAPI,
  },
});

export const receiveAirQualityError = (errorInfo, airQualityAPI) => ({
  type: RECEIVE_AIRQUALITY_ERROR,
  payload: {
    errorInfo,
    airQualityAPI,
  },
});

export function fetchConditionsMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'current-conditions';
    dispatch(requestMetadata(airQualityAPI));
    dispatch(addRoute(routes));
    let url = '';
    routes.map((route) => {
      url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=${route.lat}&lon=${route.lng}&key=${KEY}&metadata=true&features=breezometer_aqi`;
      axios
        .get(url)
        .then((response) => {
          dispatch(receiveMetadata(airQualityAPI));
          let data = response.data;
          if (data.data.data_available && airQualityAPI === airQualityAPI) {
            dispatch(addMetadata(data.data));
          }
        })
        .catch(function (error) {
          let errorInfo = error.response.data.error;
          dispatch(receiveAirQualityError(errorInfo, airQualityAPI));
        });
    });
  };
}

export function fetchForecastMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'forecast/hourly';
    dispatch(requestMetadata(airQualityAPI));
    dispatch(addRoute(routes));
    let url = '';
    routes.map((route) => {
      url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=${route.lat}&lon=${route.lng}&key=${KEY}&features=breezometer_aqi&hours=4`;
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
    });
  };
}

export function fetchHistoricalMetadata() {
  return function (dispatch) {
    let airQualityAPI = 'historical/hourly';
    dispatch(requestMetadata(airQualityAPI));
    dispatch(addRoute(routes));
    let url = '';
    routes.map((route) => {
      url = `https://api.breezometer.com/air-quality/v2/${airQualityAPI}?lat=${route.lat}&lon=${route.lng}&key=${KEY}&features=breezometer_aqi&hours=3`;
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
    });
  };
}
