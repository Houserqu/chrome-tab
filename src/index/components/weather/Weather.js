import React, {Component} from 'react';
import {inject, observer} from "mobx-react/index";
import "./weather.less";
import DailyWeather from "./DailyWeather";
import NowWeather from "./NowWeather";
import Location from "./Location";
import WeatherTitle from "./WeatherTitle";

// TODO：天气城市选择

@inject('WeatherStore')
@observer
class Weather extends Component {
  state = {}

  componentDidMount(){
    this.props.WeatherStore.fetchWeather();
    this.props.WeatherStore.fetchCity();
  }

  render(){
    const { daily, weather, week, img, temp, winddirect } = this.props.WeatherStore.weather;

    return (
      <div className='weather'>
        {/*<div className="weather__content">*/}
          {/*<WeatherTitle/>*/}
          {/*<Location/>*/}
        {/*</div>*/}
        <div className="weather__footer--glass" />
        <div className="weather__footer">
          <NowWeather weather={weather} week={week} img={img} temp={temp} winddirect={winddirect} />
          <DailyWeather data={daily}/>
        </div>
      </div>
    )
  }
}

export default Weather;
