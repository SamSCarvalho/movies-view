import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = (props) => {
  const { title }  = props;
  return (
    <div className="header-page">
      <h1>{title}</h1>
    </div>
  );
}

Header.protoTypes = {
  title: PropTypes.string
}

export default Header;
