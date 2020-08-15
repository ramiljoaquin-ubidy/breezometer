import React from 'react';

import Metadata from '../components/Metadata';

function MetadataList(props) {
  const rows = [];
  if (props.metadataArray.length > 0) {
    let metadataInfos = props.metadataArray[0].data;
    if (Array.isArray(metadataInfos)) {
      metadataInfos.map((metaInfo) =>
        rows.push(
          <Metadata key={metaInfo.indexes.baqi.aqi} metaInfo={metaInfo} />
        )
      );
      //debugger;
    } else {
      rows.push(
        <Metadata
          key={metadataInfos.indexes.baqi.aqi}
          metaInfo={metadataInfos}
        />
      );
      //debugger;
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

export default MetadataList;
