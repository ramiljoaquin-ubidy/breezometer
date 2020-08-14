import {
  fetchConditionsMetadata,
  fetchForecastMetadata,
  fetchHistoricalMetadata,
} from '../actions';
import AddMetadataForm from '../components/AddMetadataForm';
import { connect } from 'react-redux';

//here I receive state as parameter, the function could be (state) => ({...})
//but instead, I use destructuring to "disarm" state

const mapStateToProps = ({
  appStatus: {
    errorMsg,
    errorCode,
    errorInfo,
    isFetching,
    success,
    airQualityAPI,
  },
}) => ({
  errorMsg,
  errorCode,
  errorInfo,
  isFetching,
  success,
  airQualityAPI,
});

const mapDispatchToProps = {
  fetchConditionsMetadata,
  fetchForecastMetadata,
  fetchHistoricalMetadata,
};

const AddMetadataFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMetadataForm);

export default AddMetadataFormContainer;
