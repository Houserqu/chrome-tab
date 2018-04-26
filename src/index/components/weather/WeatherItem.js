import React from 'react';

const WeatherItem = ({data}) => {
  const { day, night, week } = data
  return (
    <div className='weather__daily--item'>
      <p className='weather__daily--item-week'>
        {week}
        </p>
      <img src={`/weathericon/${day.img}.png`} className='' alt={day.img} />
      <p>
        {day.temphigh} ~ {night.templow}
      </p>
    </div>
  );
}

export default WeatherItem;
