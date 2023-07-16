import React from 'react';
import PropTypes from 'prop-types';
function ItemStat({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}
ItemStat.proptype = {
  label: PropTypes.string,
  percentage: PropTypes.string,
};
export default ItemStat;
