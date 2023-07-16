import React from 'react';
import '../Profile.css';
import PropTypes from 'prop-types';
function Description({ username, tag, location, avatar }) {
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="description__avatar" />
      <p className="description__name">{username}</p>
      <p className="description__info">@{tag}</p>
      <p className="description__info">{location}</p>
    </div>
  );
}
Description.proptype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
export default Description;
