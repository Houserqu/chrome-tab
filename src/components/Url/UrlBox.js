import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'antd';
import Url from "./Url";

@inject('UrlStore')
@observer
class UrlBox extends Component {

  handleDelUrl = () => {
    this.props.UrlStore.del()
  }

  render() {
    const data  = this.props.UrlStore.urls;
    return (
      <div className='urlbox'>
          <Row>
            {
              data.map(item => <Url data={item} key={item.key} del={this.handleDelUrl} />)
            }
          </Row>
      </div>

    );
  }
}

export default UrlBox;
