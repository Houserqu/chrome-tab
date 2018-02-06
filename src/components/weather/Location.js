import React, {Component} from 'react';
import {inject} from "mobx-react/index";

@inject('WeatherStore')
class Location extends Component {
  render(){
    return (
      <div className="weather__location">
        <img src="/location.png" alt="location" className="weather__location--img"/>
        <p className="weather__location--p">
          {this.props.WeatherStore.location.city}
          <br />
          20:14
        </p>
      </div>
    )
  }
}

export default Location;
