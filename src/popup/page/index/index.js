import React, {Component} from 'react';
import { Button } from 'antd';
import { message } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('UrlStore')
@observer
class Index extends Component {
  state = {}

  addCollection = () => {
    
    console.log("chrome", window.chrome);
    window.chrome.tabs.query({
      active: true
    }, (tabs) => {
      // [ Tab ]   https://crxdoc-zh.appspot.com/extensions/tabs#type-Tab
      console.log(tabs);

      let values = {
        title: tabs[0].title,
        url: tabs[0].url
      }
  
      this.props.UrlStore.add(values).then(e => {
        if (e.code === 200) {
          message.success("添加成功");
        }
      }).catch(e => {
        message.error(e.message);
      });
    })
  }

  render(){
    return (
      <div>
          <Button type="primary" onClick={this.addCollection}>收藏当前页面</Button>
      </div>
    )
  }
}

export default Index;
