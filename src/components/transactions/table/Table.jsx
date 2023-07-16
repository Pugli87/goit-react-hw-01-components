import React from 'react';
import PropTypes from 'prop-types';

function Table({ transactions }) {
  const CamelCaseFirstLetter = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="th thead">Type</th>
          <th className="th thead">Amount</th>
          <th className="th thead">Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr
            className={index % 2 ? 'trBody trPair' : 'trBody trOdd'}
            key={index}
          >
            <td className="th tbody">
              {CamelCaseFirstLetter(transaction.type)}
            </td>
            <td className="th tbody">{transaction.amount}</td>
            <td className="th tbody">{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  transactions: PropTypes.array,
};

export default Table;
