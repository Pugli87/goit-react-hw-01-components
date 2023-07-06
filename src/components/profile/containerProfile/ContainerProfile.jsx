import React from 'react';
import PropTypes from 'prop-types';
function ContainerProfile({ children }) {
  return <div className="profile">{children}</div>;
}
ContainerProfile.PropType = {
  children: PropTypes.node,
};
export default ContainerProfile;
