import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

const StatsItem = styled.li`
  flex-basis: calc(100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 1px solid rgba(172, 171, 171, 0.322);
  background-color: rgba(204, 231, 240, 0.589);

  &:not(:last-child){
    border-right: 1px solid rgba(172, 171, 171, 0.322);
  }
`;

const StatsLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #a8a1a1;
`;

const StatsQuantity = styled.span`
  font-weight: bold;
  font-size: 16px;
}
`;
function Status({ stats }) {
  return (
    <Stats>
      <StatsItem>
        <StatsLabel>Followers </StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views </StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes </StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </Stats>
  );
}

Status.propTypes = {
  stats: PropTypes.object,
};

export default Status;
