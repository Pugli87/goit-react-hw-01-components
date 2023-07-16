import React from 'react';
import PropTypes from 'prop-types';
import ContainerProfile from 'components/Container';
import ItemFriend from './ItemFriend/ItemFriend';
import './friends.css';
function Friends({ friends }) {
  return (
    <ContainerProfile type="container friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <ItemFriend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </ContainerProfile>
  );
}
Friends.proptype = {
  friends: PropTypes.array,
};
export default Friends;
