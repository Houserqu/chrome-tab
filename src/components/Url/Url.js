import React from 'react';
import style from './url.less';

const Url = ({data, del}) => {
  return (
    <div
      className={style.url}
      onClick={() => del()}
    >
      {data.title}
    </div>
  )
}

export default Url;
