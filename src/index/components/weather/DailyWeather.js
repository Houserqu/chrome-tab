import React from 'react';
import WeatherItem from "./WeatherItem";

const DailyWeather = ({data}) => {
  console.log(data);
  return (
    <div className='weather__daily'>
      {
        data.map(item => <WeatherItem key={item.date} data={item}/>)
      }
    </div>
  );
}

export default DailyWeather;
