import React from 'react';
import user from '../data/profileData/user.json';
import stats from '../data/statisticsData/data.json';
import frienData from '../data/friendsData/friends.json';
import transactions from '../data/transactionsData/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './friends/Friends';
import Transaction from './transactions/Transaction';
export const App = () => {
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
