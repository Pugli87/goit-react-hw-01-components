import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemFriend from './ItemFriend/ItemFriend';
import Container from 'components/container/Container';

const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Friends({ friends }) {
  return (
    <Container type="container friends">
      <FriendList>
        {friends.map(friend => (
          <ItemFriend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </FriendList>
    </Container>
  );
}

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friends;
