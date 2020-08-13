import React from 'react';

class AddMetadataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMetadata(this.state.userInput);
  };

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    let {
      errorMsg,
      errorCode,
      errorInfo,
      isFetching,
      success,
      userInput,
    } = this.props;
    if (!success && errorMsg && errorMsg.response) {
      errorMsg = `${errorMsg.response.data.error.message}: ${userInput}`;
    }
    let loading = null;
    let errorLog = null;
    loading = isFetching ? <h4>Loading...</h4> : <h4> </h4>;
    if (!success) {
      errorLog = (
        <div>
          <h4 id="error">
            {' '}
            ERROR ({errorCode}) {errorMsg}: {userInput}{' '}
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
            disabled={!this.state.userInput}
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
