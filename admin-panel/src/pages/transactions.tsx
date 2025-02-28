import React, { useEffect, useState } from 'react';
import { getTransactions } from '../services/api';
import DataTable from '../components/DataTable';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Gerenciamento de Transações</h1>
      <DataTable data={transactions} columns={['ID', 'Valor', 'Status', 'Data']} />
    </div>
  );
};

export default TransactionsPage;