import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('WeatherStore')
@observer
class Weather extends Component {
  state = {}

  componentDidMount() {
    this.props.WeatherStore.fetchWeather();
  }

  render() {
    console.log(this.props.WeatherStore.weather.city)
    return (
      <div>
        {
          this.props.WeatherStore.weather.daily ? this.props.WeatherStore.weather.daily[0].day.weather : null
        }
      </div>
    )
  }
}

export default Weather;
