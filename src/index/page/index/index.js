import React, {Component} from 'react';
import Search from "../../components/search/Search";
import UrlBox from "../../components/Url/UrlBox";
import NewUrl from "../../components/Url/New";
import UpdateUrl from "../../components/Url/Update";
import Weather from "../../components/weather/Weather";

class Index extends Component {
  state = {}

  render(){
    return (
      <div>
        <Search/>
        <UrlBox/>

        <NewUrl/>
        <UpdateUrl/>
        {/* <Weather/> */}
      </div>
    )
  }
}

export default Index;
