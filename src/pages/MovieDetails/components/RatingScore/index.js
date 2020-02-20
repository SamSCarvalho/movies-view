import React from 'react';
import PropTypes from 'prop-types';

import '../../style.css';

const RatingScore = (props) => {
  const { rating } = props;
  return (
    <div className="rating-circle-big">
      <div>
        <span>{(rating*10)}%</span>
      </div> 
    </div>
  )
}

RatingScore.propTypes = {
  rating: PropTypes.number,
}

RatingScore.defaultProps = {
  rating: 0,
};

export default RatingScore;