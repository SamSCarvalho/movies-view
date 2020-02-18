import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

class Pagination extends Component {
  static propTypes = {
    value: PropTypes.number,
  };

  static defaultProps = {
    value: 1,
  };

  render() {
    const { value, changePage, numberPages } = this.props;
    const pages = []
    for(let i=1; i<=numberPages; i++){
      if (i === value) {
        pages.push(
          <div key={i} className="page-selected">
            <span>{i}</span>
          </div>
        )
      } else{
        pages.push(
          <span key={i} onClick={() => changePage(i)}>{i}</span>
        )
      }
    }
    return (
      <div className="pagination">
        {pages}
      </div>
    )
  }
}


export default Pagination;