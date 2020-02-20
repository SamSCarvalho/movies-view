import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PLACEHOLDER } from '../../constants/searchInput';
import searchIcon from '../../res/images/search.png';

import './style.css';

class SearchInput extends Component {
  static propTypes = {
    searchFunction: PropTypes.func,
  };

  static defaultProps = {
    searchFunction: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }
 
  handleChangeSearch(event) {
    const value = event.target.value;
    this.setState({
      value
    })
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {  
      this.executeSearch();
    }
  }

  executeSearch = () => {
    const { searchFunction } = this.props;
    const { value } = this.state;
    if (value) {
      searchFunction(value);
    }
  }

  render() {
    return (
      <div className="div-search-input">
        <div className="search-input">
          <input
            placeholder={PLACEHOLDER}
            onChange={this.handleChangeSearch.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
          >
          </input>
          <button onClick={() => this.executeSearch()}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
