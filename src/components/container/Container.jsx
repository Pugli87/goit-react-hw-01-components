import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

function ContainerProfile({ children, type }) {
  return (
    <div className={type}>
      {children}
    </div>
  );
}

ContainerProfile.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default ContainerProfile;
