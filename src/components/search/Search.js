import React, {Component} from 'react';
import { Input, Select, Button } from 'antd';

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Select.Option value="Http://">Google</Select.Option>
    <Select.Option value="Https://">Baidu</Select.Option>
  </Select>
);

class Search extends Component {
  state = {
    search_value: '',
    engine: [
      {
        name: 'Google',
        url: 'www.google.com',
        value: 'google'
      }
    ],
    currency: 'Google'
  }

  handleSearch = () => {
    console.log(this.state.search_value)
  }

  render(){
    const { search_value } = this.state;
    return (
      <div className='search'>
        <div className='search__input'>
          <Input
            size='large'
            addonBefore={selectBefore}
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
