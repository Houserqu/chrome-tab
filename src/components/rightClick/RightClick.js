import React, {Component} from 'react';
import { Popover } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('RightClickStore')
@observer
class RightClick extends Component {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount(){
    document.addEventListener('click', () => this.props.RightClickStore.close());
  }

  render(){
    const { position, actions, title} = this.props.RightClickStore;
    return (
      <div >
        <Popover
          content={actions}
          title={title}
          trigger="click"
          visible={this.props.RightClickStore.show}
          onVisibleChange={this.handleVisibleChange}
          placement="rightTop"
        >
          <div style={{ position: 'absolute', width: '1px', height: '1px', left: position.x, top: position.y}} />
        </Popover>
      </div>
    )
  }
}

export default RightClick;
