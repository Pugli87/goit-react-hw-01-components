import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ItemFriend from './ItemFriend/ItemFriend';

const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  gap: 20px;
  margin-bottom: 50px;
`;

function Friends({ friends }) {
  return (
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
  );
}

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friends;
