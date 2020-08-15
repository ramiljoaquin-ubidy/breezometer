import React from 'react';
import AddMetadataFormContainer from '../containers/AddMetadataFormContainer';
import MetadataContainer from '../containers/MetadataContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddMetadataFormContainer />
        <MetadataContainer />
      </div>
    );
  }
}

export default App;
