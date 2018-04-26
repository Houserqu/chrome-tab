import React from 'react';

const NowWeather = ({ weather, week, img, temp, winddirect }) => {
  return (
    <div className='w-daily__now'>
      <div className='w-daily__now--temp'>
        <div className='temp'>
          {temp}
        </div>
        <div className='day'>
          {week}
        </div>
      </div>
      <div className='w-daily__now--icon'>
        <img src={`/weathericon/${img}.png`} className='' alt={img}/>
        <div className="wind">
          {winddirect}
        </div>
      </div>
    </div>
  );
}

export default NowWeather;
