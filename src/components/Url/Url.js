import React from 'react';

const Url = ({ data, del }) => {
  return (
    <button onClick={() => del()}>{data.title}</button>
  )
}

export default Url;
