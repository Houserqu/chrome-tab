import React from 'react';
import { Button, Col } from 'antd';

const Url = ({data, del}) => {
  return (
    <Col span={2}>
      <Button onClick={() => del()}>{data.title}</Button>
    </Col>
  )
}

export default Url;
