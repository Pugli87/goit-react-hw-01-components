import React from 'react';
import './Profile.css';
import ContainerProfile from '../Container';
import Description from './description/Description';
import Status from './status/Status';
import PropTypes from 'prop-types';
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ContainerProfile type="container profile">
      <div className="wrapper">
        <Description
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <Status stats={stats} />
      </div>
    </ContainerProfile>
  );
}
Profile.proptype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
export default Profile;
