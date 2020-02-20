import React from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

const RatingScore = (props) => {
  const { rating } = props;
  return (
    <div className="rating-circle">
      <div>
        <span>{(rating*10)}%</span>
      </div>
    </div>
  )
}

RatingScore.propTypes = {
  title: PropTypes.number,
}

RatingScore.defaultProps = {
  title: 0,
}

export default RatingScore;