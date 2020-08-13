import { fetchMetadata } from '../actions/actions';
import AddMetadataForm from '../components/AddMetadataForm';
import { connect } from 'react-redux';

//here I receive state as parameter, the function could be (state) => ({...})
//but instead, I use destructuring to "disarm" state

const mapStateToProps = ({
  appStatus: { errorMsg, errorCode, errorInfo, isFetching, success, userInput },
}) => ({
  errorMsg,
  errorCode,
  errorInfo,
  isFetching,
  success,
  userInput,
});

const mapDispatchToProps = {
  fetchMetadata,
};

const AddMetadataFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMetadataForm);

export default AddMetadataFormContainer;
