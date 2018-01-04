import React, {Component} from 'react';
import SearchInput from './SearchInput';
import SearchSelect from "./SearchSelect";
import style from './search.less';

class Search extends Component {
  state = {
    engine: [
      {
        name: 'Google',
        url: 'www.google.com',
        value: 'google'
      }
    ],
    currency: 'Google'
  }

  render(){
    return (
      <div className={style.search_root}>
        <div className={style.search_searchSelect_box}>
          <SearchSelect data={this.state.engine}/>
        </div>
        <div className={style.search_searchInput_box}>
          <SearchInput />
        </div>
      </div>
    )
  }
}

export default Search;
