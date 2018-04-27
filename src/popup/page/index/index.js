import React, {Component} from 'react';
import { Button } from 'antd';


class Index extends Component {
  state = {}

  addCollection = () => {
    console.log("chrome", window.chrome);
    window.chrome.tabs.query({
      active: true
    }, (tab) => {
      console.log(tab);
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
