import React, {Component} from 'react';
import { Input, Select, Button } from 'antd';
import SearchEngine from './SearchEngine';

class Search extends Component {
  state = {
    search_value: '',
    engine: [
      {
        name: 'Google',
        url: 'https://www.google.com/search?q=',
        value: 'google'
      },
      {
        name: 'Baidu',
        url: 'https://www.baidu.com/s?wd=',
        value: 'baidu'
      }
    ],
    engine_index: 0,
  }

  handleSearch = () => {
    let url = this.state.engine[this.state.engine_index].url + this.state.search_value;
    console.log(url);
    window.location.href=url;
  }

  handleEngineChange = v => {
    console.log(v);
    this.setState({engine_index: v})
  }

  render(){
    const { search_value, engine } = this.state;
    return (
      <div className='search'>
        <div className='search__input'>
          <Input
            size='large'
            addonBefore={<SearchEngine data={engine} onChange={this.handleEngineChange}/>}
            onPressEnter={this.handleSearch}
            value={search_value}
            onChange={e=>this.setState({search_value: e.target.value})}
          />
        </div>
      </div>
    )
  }
}

export default Search;
