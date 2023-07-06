import React from 'react';
import PropTypes from 'prop-types';

function Description({ username, tag, location, avatar }) {
  return (
    <div className="profile__description">
      <img src={avatar} alt="User avatar" className="profile__avatar" />
      <p className="profile__name">{username}</p>
      <p className="profile__tag">@{tag}</p>
      <p className="profile__location">{location}</p>
    </div>
  );
}
Description.proptype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objets,
};
export default Description;
