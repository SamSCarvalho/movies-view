import React from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

const TagGenre = (props) => {
  const { describe } = props;
  return (
    <div className="tag-genre">
      <span>{describe}</span>
    </div>
  )
}

TagGenre.protoTypes = {
  title: PropTypes.string
}

export default TagGenre;