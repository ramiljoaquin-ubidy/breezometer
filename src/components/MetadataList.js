import React from 'react';

import Metadata from '../components/Metadata';

const MetadataList = (props) => {
  const rows = [];
  let metaArr = props.metadataArray;
  if (metaArr.length > 0) {
    metaArr = metaArr.slice(-1);
    let metadataInfos = metaArr[0].data;
    if (Array.isArray(metadataInfos)) {
      metadataInfos.map((metaInfo, index) =>
        rows.push(<Metadata key={index} metaInfo={metaInfo} />)
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
};

export default MetadataList;
