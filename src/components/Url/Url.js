import React, {Component} from 'react';
import { Button, Col, Tooltip, Popover } from 'antd';
import {inject, observer} from "mobx-react/index";

@inject('RightClickStore')
@observer
class Url extends Component {
  state = {
    operation_show: false
  }

  handleOperation = (e) => {
    e.preventDefault()
    //this.setState({operation_show: true});
    // e.target.addEventListener('mouseleave', e => {
    //   console.log(e.relatedTarget)
    //   this.setState({operation_show: false})
    // })
    this.props.RightClickStore.operationUrl([
      {
        name: '删除',
        action: () => {
          console.log('del')
        }
      }
    ]);
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

        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="操作"
          trigger="click"
          visible={this.state.operation_show}
          onVisibleChange={this.handleVisibleChange}
          placement="rightTop"
        >
        </Popover>
      </Col>
    )
  }
}

export default Url;

