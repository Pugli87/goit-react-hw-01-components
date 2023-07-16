import React from 'react';
import PropTypes from 'prop-types';
import ContainerProfile from 'components/Container';
import Table from './table/Table';
import './transaction.css';
function Transaction({ transactions }) {
  return (
    <ContainerProfile type="container transactions">
      <Table transactions={transactions} />
    </ContainerProfile>
  );
}
Transaction.proptype = {
  transactions: PropTypes.array,
};
export default Transaction;
