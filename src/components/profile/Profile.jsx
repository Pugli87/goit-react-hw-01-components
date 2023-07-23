import React from 'react';
import './Profile.css';
import Container from '../container/Container';
import Description from './description/Description';
import Status from './status/Status';
import PropTypes from 'prop-types';

function Profile({ avatar, username, tag, location,  stats }) {
  return (
    <Container type="container profile">
      <div className="wrapper">
        <Description
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
        />
        <Status stats={stats} />
      </div>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

