import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PLACEHOLDER } from '../../constants/searchInput';

import './style.css';

class SearchInput extends Component {
  static propTypes = {
    searchFunction: PropTypes.func,
  };

  static defaultProps = {
    searchFunction: () => {},
  };

  handleChangeSearch(event) {
    const { searchFunction } = this.props;
    const value = event.target.value;
    searchFunction(value);
  }

  render() {
    return (
      <div className="div-search-input">
        <input
          className="search-input"
          placeholder={PLACEHOLDER}
          onChange={this.handleChangeSearch.bind(this)}
        />
      </div>
    );
  }
}

export default SearchInput;
