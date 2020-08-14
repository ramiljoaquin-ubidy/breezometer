import React from 'react';

class AddMetadataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { airQualityAPI: '' };
  }

  handleConditionsSubmit(e) {
    this.props.fetchConditionsMetadata();
  }

  handleForecastSubmit(e) {
    this.props.fetchForecastMetadata();
  }

  handleHistoricalSubmit(e) {
    this.props.fetchHistoricalMetadata();
  }

  render() {
    let {
      errorMsg,
      errorCode,
      errorInfo,
      isFetching,
      success,
      airQualityAPI,
    } = this.props;
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
        <ul>
          <li>current-conditions</li>
          <li>forecast/hourly</li>
          <li>historical/hourly</li>
          <li></li>
        </ul>
        <form>
          <input
            id="submitButtonConditions"
            type="button"
            onClick={() => this.handleConditionsSubmit()}
            value="Conditions"
          />
          <input
            id="submitButtonForecast"
            type="button"
            onClick={() => this.handleForecastSubmit()}
            value="Forecast"
          />
          <input
            id="submitButtonHistorical"
            type="button"
            onClick={() => this.handleHistoricalSubmit()}
            value="Historical"
          />
          {loading}
          {errorLog}
        </form>
      </div>
    );
  }
}

export default AddMetadataForm;
