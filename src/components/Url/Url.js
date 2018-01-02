import React from 'react';

const Url = ({ data, del }) => (
  <button onClick={() => del()}>{data.categoryName}</button>
);

export default Url;