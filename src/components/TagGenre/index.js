import React from 'react';
import PropTypes from 'prop-types';

import { NOT_DEFINED } from '../../constants/system';

import './style.css';

const TagGenre = (props) => {
  const { describe } = props;
  return (
    <div className="tag-genre">
      <span>{describe}</span>
    </div>
  )
}

TagGenre.propTypes = {
  title: PropTypes.string,
}

TagGenre.defaultProps = {
  title: NOT_DEFINED,
};

export default TagGenre;