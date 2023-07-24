import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableContainer = styled.div`
  border-radius: 10px; /* Agrega aquí el valor de border-radius que desees */
  overflow: hidden; /* Para asegurarse de que el contenido dentro del contenedor no desborde */
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const TransactionHistory = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const TableHead = styled.thead`
  color: #fff;
`;

const TableRow = styled.tr`
  width: 250px;
  background-color: ${props => props.$isOdd ? "rgb(240, 240, 240)" : "#fff"};
`;

const TableHeader = styled.th`
  width: 250px;
  padding: 15px 0;
  font-weight: 400;
  text-transform: uppercase;
  background-color: rgb(12, 208, 243);

  &:not(:last-child) {
    border-right: 1px solid rgb(223, 221, 221);
  }
`;

const TableBody = styled.tbody`
  color: rgb(128, 128, 128);
`;

const TableDates = styled.td`
  text-align: center;
  padding: 15px 0;
  color: rgb(128, 128, 128);
  
  &:not(:last-child) {
    border-right: 1px solid rgb(223, 221, 221);
  }

`;

function Table({ transactions }) {
  const CamelCaseFirstLetter = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <TableContainer>
    <TransactionHistory>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody >
        {transactions.map((transaction, index) => (
          <TableRow
            key={index}
            $isOdd={index % 2 !== 0}
          >
            <TableDates>
              {CamelCaseFirstLetter(transaction.type)}
            </TableDates>
            <TableDates>{transaction.amount}</TableDates>
            <TableDates>{transaction.currency}</TableDates>
          </TableRow>
        ))}
      </TableBody >
    </TransactionHistory>
    </TableContainer>
  );
}

Table.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default Table;

