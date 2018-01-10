import React from 'react';
import { Select } from 'antd';

const SearchEngine = ({data, onChange}) => {
  return (
    <Select defaultValue={data[0].value} onChange={v=>onChange(v)}>
      {
        data.map((item, index) => <Select.Option value={index} key={item.value}>{item.name}</Select.Option>)
      }
    </Select>

  );
}

export default SearchEngine;
