import React from 'react';
import styled from 'styled-components';

import user from '../data/profileData/user.json';
import stats from '../data/statisticsData/data.json';
import frienData from '../data/friendsData/friends.json';
import transactions from '../data/transactionsData/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './friends/Friends';
import Transaction from './transactions/Transaction';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  background: ${props => props.variant === 'primary' ? "lightgray" : "rgb(255, 255, 255)"};
`;

const App = () => {
  return (
    <>
      <Container variant="primary">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={stats} />
      </Container>
      <Container>
      <Friends friends={frienData} />
      <Transaction transactions={transactions} />
      </Container>
    </>
  );
};

export default App;
