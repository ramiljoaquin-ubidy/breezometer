import React from 'react';
import AddMetadataForm from '../containers/AddMetadataFormContainer';
import MetadataContainer from '../containers/MetadataContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddMetadataForm />
        <MetadataContainer />
      </div>
    );
  }
}

export default App;
