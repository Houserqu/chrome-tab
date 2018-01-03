import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Url from './Url';

@inject('UrlStore')
@observer
class UrlList extends Component {

  handleDelUrl = () => {
    this.props.UrlStore.del()
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
      {
        data.map(item => <Url data={item} key={item.id} del={this.handleDelUrl} />)
      }
      </div>
    );
  }
}

export default UrlList;