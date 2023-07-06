import React from 'react';
import PropTypes from 'prop-types';

function Status({ stats }) {
  return (
    <div className="profile__container">
      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers </span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="profile__label">Views </span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="profile__label">Likes </span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Status.propTypes = {
  stats: PropTypes.object,
};

export default Status;
