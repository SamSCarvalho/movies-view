import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { NOT_DEFINED } from '../../../../constants/system';

import '../../style.css'

const HeaderCard = (props) => {
  const { title, date } = props;
  const dateMovie = (date) ? date : new Date();
  const dateRelease = moment(dateMovie).format("DD/MM/YYYY");
  return(
    <div className="header-card-details">
      <h1>
        {title}
      </h1>
      <time dateTime={date}>{dateRelease}</time>
    </div>
  )
}

HeaderCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
}

HeaderCard.defaultProps = {
  title: NOT_DEFINED,
  date: undefined,
};

export default HeaderCard;