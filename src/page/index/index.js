import React, {Component} from 'react';
import Search from "../../components/search/Search";
import UrlBox from "../../components/Url/UrlBox";

class Index extends Component {
  state = {}

  render(){
    return (
      <div>
        <Search/>
        <UrlBox/>
      </div>
    )
  }
}

export default Index;
