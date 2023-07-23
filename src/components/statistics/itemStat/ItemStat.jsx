import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  flex-basis: calc(100%);
  width: 80px;
  height: 90px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #fff;

  &:nth-child(1) {
    background-color: rgb(63, 106, 223);
  }
  &:nth-child(2) {
    background-color: rgb(149, 41, 182);
  }
  &:nth-child(3) {
    background-color: rgb(223, 42, 117);
  }
  &:nth-child(4) {
    background-color: rgb(52, 106, 167);
  }
  &:nth-child(5) {
    background-color: rgb(57, 207, 137);
  }
`;

const Label = styled.span`
  font-size: 14px;
`;

const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

function ItemStat({ label, percentage }) {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
}

ItemStat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default ItemStat;

