import React from 'react';
import PropTypes from 'prop-types';
import Table from './table/Table';

function Transaction({ transactions }) {
  return (
      <Table transactions={transactions} />
  );
}

Transaction.propTypes = {
  transactions: PropTypes.array,
};

export default Transaction;
