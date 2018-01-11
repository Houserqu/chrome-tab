import React, {Component} from 'react';
import { Button, Col, Tooltip } from 'antd';
import {inject, observer} from "mobx-react/index";

@inject('RightClickStore', 'UrlStore')
@observer
class Url extends Component {
  state = {
    operation_show: false
  }

  handleDel = () => {
    this.props.UrlStore.del(this.props.data.key);
  }

  handleUpdate = () => {
    this.props.UrlStore.showUpdate(this.props.data);
  }

  handleOperation = (e) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY - 10;

    this.props.RightClickStore.operationUrl({
      title: 'Url操作',
      position: { x, y },
      actions: <div key='update'>
        <a className='rightclick__action' key='del' onClick={this.handleDel}>删除</a>
        <a className='rightclick__action' key='update' onClick={this.handleUpdate}>编辑</a>
      </div>
  });
  }

  render(){
    const {data, open} = this.props;
    return (
      <Col span={2}>
        <Tooltip title={data.url}>
          <Button
            onClick={() => open(data)}
            className='url__button'
            onContextMenu={this.handleOperation}
          >
            {data.title}
          </Button>
        </Tooltip>
      </Col>
    )
  }
}

export default Url;

