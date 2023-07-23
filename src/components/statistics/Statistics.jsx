import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/container/Container';
import ItemStat from './itemStat/ItemStat';


const StatisticsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const StatisticsContTitle = styled.div`
  background-color: #fff;
  padding: 20px 60px;
`;

const StatisticsTitle = styled.h2`
  font-weight: 400;
  font-size: 30px;
  text-transform: uppercase;
`;

const StatsList = styled.ul`
  display: flex;
`; 

function Statistics({ stats, title }) {
  return (
    <Container type="container statistics">
      <StatisticsSection>
        <StatisticsContTitle>
          <StatisticsTitle>{title}</StatisticsTitle>
        </StatisticsContTitle>

        <StatsList>
          {stats.map(stat => (
            <ItemStat
              label={stat.label}
              percentage={stat.percentage}
              key={stat.id}
            />
          ))}
        </StatsList>
      </StatisticsSection>
    </Container>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;

