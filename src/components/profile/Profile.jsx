import React from 'react';
import ContainerProfile from './containerProfile/ContainerProfile';
import Description from './description/Description';
import Status from './status/Status';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ContainerProfile>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Status stats={stats} />
    </ContainerProfile>
  );
}

Profile.proptype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objets,
};
export default Profile;
