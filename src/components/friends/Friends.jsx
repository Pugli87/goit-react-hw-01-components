import React from 'react';
import PropTypes from 'prop-types';
import ContainerProfile from 'components/container/Container';
import ItemFriend from './ItemFriend/ItemFriend';
import './friends.css';

function Friends({ friends }) {
  return (
    <ContainerProfile type="container friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <ItemFriend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </ContainerProfile>
  );
}

Friends.propTypes = {
  friends: PropTypes.array,
};

export default Friends;
