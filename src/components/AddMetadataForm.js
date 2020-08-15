import React from 'react';

function AddMetadataForm(props) {
  const handleConditionsSubmit = (e) => {
    props.fetchConditionsMetadata();
  };

  const handleForecastSubmit = (e) => {
    props.fetchForecastMetadata();
  };

  const handleHistoricalSubmit = (e) => {
    props.fetchHistoricalMetadata();
  };

  let {
    errorMsg,
    errorCode,
    errorInfo,
    isFetching,
    success,
    airQualityAPI,
  } = props;
  if (!success && errorMsg && errorMsg.response) {
    errorMsg = `${errorMsg.response.data.error.message}: ${airQualityAPI}`;
  }
  let loading = null;
  let errorLog = null;
  loading = isFetching ? <h4>Loading...</h4> : <h4> </h4>;
  if (!success) {
    errorLog = (
      <div>
        <h4 id="error">
          {' '}
          ERROR ({errorCode}) {errorMsg}: {airQualityAPI}{' '}
        </h4>
        <h5> {errorInfo} </h5>
      </div>
    );
  }

  return (
    <div>
      <h1>Air API</h1>
      <ul>
        <li>current-conditions</li>
        <li>forecast/hourly</li>
        <li>historical/hourly</li>
      </ul>
      <form>
        <input
          id="submitButtonConditions"
          type="button"
          onClick={handleConditionsSubmit}
          value="Conditions"
        />
        <input
          id="submitButtonForecast"
          type="button"
          onClick={handleForecastSubmit}
          value="Forecast"
        />
        <input
          id="submitButtonHistorical"
          type="button"
          onClick={handleHistoricalSubmit}
          value="Historical"
        />
        {loading}
        {errorLog}
      </form>
    </div>
  );
}

export default AddMetadataForm;
