import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

function Container({ children, type }) {
  return (
    <div className={type}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Container;
