import React from 'react';
import Profile from './profile/Profile';
import user from '../data/user.json';
export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
