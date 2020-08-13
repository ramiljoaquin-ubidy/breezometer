import MetadataList from '../components/MetadataList';

import { connect } from 'react-redux';

const mapStateToProps = ({ metadataArray }) => ({
  metadataArray,
});

const MetadataContainer = connect(mapStateToProps)(MetadataList);

export default MetadataContainer;
