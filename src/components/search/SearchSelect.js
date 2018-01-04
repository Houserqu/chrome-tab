import React from 'react';
import style from './search.less';

const SearchSelect = ({ data }) => {
  return (
    <select className={style.search_searchSelect}>
      {
        data.map(item => {
          return <option value={item.value} key={item.value}>{item.name}</option>
        })
      }
    </select>
  );
}

export default SearchSelect;
