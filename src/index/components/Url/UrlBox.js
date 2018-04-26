import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Row} from 'antd';
import Url from "./Url";

@inject('UrlStore')
@observer
class UrlBox extends Component {

  handleOpen = (data) => {
    window.location.href = data.url;
  }

  render() {
    const data = this.props.UrlStore.urls;
    return (
      <div className='urlbox'>
        <Row type="flex" gutter={16}>
          {
            data.map(item => <Url data={item} key={item.key} open={this.handleOpen}/>)
          }
        </Row>
      </div>
    );
  }
}

export default UrlBox;
