import React from 'react';
function MetadataRow(props) {
  // debugger;
  console.log('props', JSON.stringify(props));
  const {
    displayName,
    aqi,
    aqi_display,
    color,
    category,
    dominant_pollutant,
  } = props.metaInfo.indexes.baqi;
  return (
    <tr>
      <td>{displayName}</td>
      <td>{aqi}</td>
      <td>{category}</td>
      <td bgcolor={color}>{dominant_pollutant}</td>
    </tr>
  );
}

export default MetadataRow;
