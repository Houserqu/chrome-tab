import React, {Component} from 'react';
import { Popover } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('RightClickStore')
@observer
class RightClick extends Component {
  state = {}

  componentDidMount(){
    document.addEventListener('contextmenu', this.handleTextMenu);
    document.addEventListener('click', () => this.props.RightClickStore.close());
  }

  handleTextMenu = e => {
    console.log(e.target);
  }

  render(){
    return (
      <div>
        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="操作"
          trigger="click"
          visible={this.props.RightClickStore.show}
          onVisibleChange={this.handleVisibleChange}
          placement="rightTop"
        >
        </Popover>
      </div>
    )
  }
}

export default RightClick;
