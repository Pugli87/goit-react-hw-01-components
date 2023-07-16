import React from 'react';
import PropTypes from 'prop-types';
import ContainerProfile from 'components/Container';
import ItemStat from './itemStat/ItemStat';
import './statistics.css';

function statistics({ stats, title }) {
  return (
    <ContainerProfile type="container statistics">
      <section className="statistics__section">
        <div className="statistics__title">
          <h2 className="title">{title}</h2>
        </div>

        <ul className="stats-list">
          {stats.map(stat => (
            <ItemStat
              label={stat.label}
              percentage={stat.percentage}
              key={stat.id}
            />
          ))}
        </ul>
      </section>
    </ContainerProfile>
  );
}
statistics.proptype = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
export default statistics;
