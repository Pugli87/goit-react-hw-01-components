import React from 'react';
import PropTypes from 'prop-types';

import user from '../data/profileData/user.json';
import stats from '../data/statisticsData/data.json';
import frienData from '../data/friendsData/friends.json';
import transactions from '../data/transactionsData/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './friends/Friends';
import Transaction from './transactions/Transaction';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Friends friends={frienData} />
      <Transaction transactions={transactions} />
    </>
  );
};

App.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default App;
