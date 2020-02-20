import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LIMITE_PAGE } from '../../../../constants/pagination';

import '../../style.css';

class Pagination extends Component {
  static propTypes = {
    value: PropTypes.number,
    changePage: PropTypes.func,
    numberPages: PropTypes.number,
  };

  static defaultProps = {
    value: 1,
    changePage: () => {},
    numberPages: 1,
  };

  render() {
    const { value, changePage, numberPages: numberPagesProps } = this.props;
    const pages = []
    let numberPages = numberPagesProps;
    if (numberPages > LIMITE_PAGE) {
      numberPages = LIMITE_PAGE;
    }
    for(let i=1; i<=numberPages; i++){
      if (i === value) {
        pages.push(
          <div key={i} className="page-selected">
            <div>
              <span>{i}</span>
            </div>
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