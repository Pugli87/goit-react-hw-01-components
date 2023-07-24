import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Information= styled.div `
  margin-bottom: 30px;
`;
const InformationAvatar= styled.img `
  background-color: lightgray;
    background-image: linear-gradient(
    45deg,
    #8b5a2b,
    #8b5a2b 25%,
    #cd853f 25%,
    #cd853f 50%,
    #8b5a2b 50%,
    #8b5a2b 75%,
    #cd853f 75%,
    #cd853f
  );
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;
const InformationNAme = styled.p `
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;

`;
const InformationDates = styled.p `
  margin-bottom: 10px;
  font-size: 16px;
  color: #a8a1a1;
  font-weight: 600;
`;

function Description({ username, tag, location, avatar }) {
  return (
    <Information>
      <InformationAvatar src={avatar} alt="User avatar"/>
      <InformationNAme>{username}</InformationNAme>
      <InformationDates>@{tag}</InformationDates>
      <InformationDates>{location}</InformationDates>
    </Information>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;

