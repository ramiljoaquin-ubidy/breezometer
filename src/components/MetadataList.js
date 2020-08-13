import React from 'react';

import MetadataRow from '../components/MetadataRow';

class MetadataList extends React.Component {
  render() {
    const rows = [];
    if (this.props.metadataArray.length > 0) {
      // debugger;
      let metadataInfos = this.props.metadataArray[0].data;
      if (Array.isArray(metadataInfos)) {
        metadataInfos.map((metaInfo) =>
          rows.push(
            <MetadataRow key={metaInfo.indexes.baqi.aqi} metaInfo={metaInfo} />
          )
        );
      } else {
        rows.push(
          <MetadataRow
            key={metadataInfos.indexes.baqi.aqi}
            metaInfo={metadataInfos}
          />
        );
      }
    }

    return (
      <div>
        <h4>Last Searches:</h4>
        <table id="table">
          <thead>
            <tr>
              <th>Display Name</th>
              <th>aqi</th>
              <th>category</th>
              <th>dominant polutant</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default MetadataList;
