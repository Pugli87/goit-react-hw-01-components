import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const ItemFriends = styled.li`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  width: 250px;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.4);
`;

const Avatar = styled.img`
  background-color: rgba(211, 211, 211, 0.466);
  border-radius: 8;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

const StatusIndicator = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${props =>
    props.isOnline &&
    css`
      background-color: green;
    `}

  ${props =>
    !props.isOnline &&
    css`
      background-color: red;
    `}
`;

function ItemFriend({ isOnline, avatar, name }) {
  return (
    <ItemFriends>
      <StatusIndicator isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ItemFriends>
  );
}

ItemFriend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ItemFriend;
