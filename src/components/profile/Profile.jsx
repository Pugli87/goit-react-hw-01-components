import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Description from './description/Description';
import Status from './status/Status';

const Wrapper = styled.div`
  background-color: white;
  width: 340px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(90, 89, 89, 0.493);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 50px;
  text-align: center;
`;
function Profile({ avatar, username, tag, location,  stats }) {
  return (
      <Wrapper>
        <Description
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
        />
        <Status stats={stats} />
      </Wrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

