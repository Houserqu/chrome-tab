import React from 'react';
import style from './search.less';

const SearchInput = ({}) => {
  return (
    <div className={style.searchInput_box}>
      <input type="text" className={style.searchInput} />
    </div>
  );
}

export default SearchInput;
