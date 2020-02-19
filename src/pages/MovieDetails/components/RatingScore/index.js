import React from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

const RatingScore = (props) => {
  const { rating } = props;
  return (
    <div className="rating-circle-big">
      <span>{(rating*10)}%</span>
    </div>
  )
}

RatingScore.protoTypes = {
  title: PropTypes.number
}

export default RatingScore;