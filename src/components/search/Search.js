import React, {Component} from 'react';
import SearchInput from './SearchInput';

class Search extends Component {
  state = {
    engine: [
      {
        name: 'Google',
        url: 'www.google.com'
      }
    ],
    currency: 'Google'
  }

  render(){
    return (
      <div>
        <SearchInput />
      </div>
    )
  }
}

export default Search;
