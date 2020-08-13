import React from 'react';

class AddMetadataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiTypeInput: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMetadata(this.state.apiTypeInput);
  };

  handleChange = (event) => {
    this.setState({ apiTypeInput: event.target.value });
  };

  render() {
    let {
      errorMsg,
      errorCode,
      errorInfo,
      isFetching,
      success,
      apiTypeInput,
    } = this.props;
    if (!success && errorMsg && errorMsg.response) {
      errorMsg = `${errorMsg.response.data.error.message}: ${apiTypeInput}`;
    }
    let loading = null;
    let errorLog = null;
    loading = isFetching ? <h4>Loading...</h4> : <h4> </h4>;
    if (!success) {
      errorLog = (
        <div>
          <h4 id="error">
            {' '}
            ERROR ({errorCode}) {errorMsg}: {apiTypeInput}{' '}
          </h4>
          <h5> {errorInfo} </h5>
        </div>
      );
    }
    return (
      <div>
        <h4>Enter the Air Quality API:</h4>
        <ul>
          <li>current-conditions</li>
          <li>forecast/hourly</li>
          <li>historical/hourly</li>
          <li></li>
        </ul>
        <form id="metadataForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            id="textInput"
            type="text"
            name="metadata"
            onChange={this.handleChange.bind(this)}
          />
          <input
            id="submitButton"
            disabled={!this.state.apiTypeInput}
            type="submit"
            value="Submit!"
          />
          {loading}
          {errorLog}
        </form>
      </div>
    );
  }
}

export default AddMetadataForm;
