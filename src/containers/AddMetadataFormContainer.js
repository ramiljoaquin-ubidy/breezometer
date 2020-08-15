import {
  fetchConditionsMetadata,
  fetchForecastMetadata,
  fetchHistoricalMetadata,
} from '../actions';
import AddMetadataForm from '../components/AddMetadataForm';
import { connect } from 'react-redux';

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
