import MetadataList from '../components/MetadataList';

import { connect } from 'react-redux';

const mapStateToProps = ({ metadataArray, routeArray }) => ({
  metadataArray,
  routeArray,
});

const MetadataContainer = connect(mapStateToProps)(MetadataList);

export default MetadataContainer;
