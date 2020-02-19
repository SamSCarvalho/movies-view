import React from 'react';
import moment from 'moment';

import '../../style.css'

const HeaderCard = (props) => {
  const { title, date } = props;
  const dateRelease = moment(date).format("DD/MM/YYYY");
  return(
    <div className="header-card-details">
      <h1>
        {title}
      </h1>
      <time dateTime={date}>{dateRelease}</time>
    </div>
  )
}

export default HeaderCard;