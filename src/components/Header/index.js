import React from 'react';
import PropTypes from 'prop-types';
import history from '../../routes/history';

import { TITLE_APP } from '../../constants/system';

import './style.css';

const Header = (props) => {
  const { title }  = props;
  return (
    <div
      className="header-page"
      onClick={() => {
        history.push('/')
      }
    }>
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: TITLE_APP,
};


export default Header;
