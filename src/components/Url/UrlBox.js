import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import style from './url.less';

import Url from './Url';

@inject('UrlStore')
@observer
class UrlBox extends Component {

  handleDelUrl = () => {
    this.props.UrlStore.del()
  }
  render() {
    const { data } = this.props;
    return (
      <div className={style.urlbox_root}>
      {
        //data.map(item => <Url data={item} key={item.id} del={this.handleDelUrl} />)
      }
      </div>
    );
  }
}

export default UrlBox;
