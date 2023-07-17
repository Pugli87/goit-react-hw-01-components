import React from 'react';
import PropTypes from 'prop-types';

function ItemFriend({ avatar, name, isOnline }) {
  return (
    <li className="item-friend">
      <div className={isOnline ? 'status online' : 'status offline'}></div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

ItemFriend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default ItemFriend;
