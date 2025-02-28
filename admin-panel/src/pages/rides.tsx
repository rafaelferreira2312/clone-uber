import React, { useEffect, useState } from 'react';
import { getRides } from '../services/api';
import DataTable from '../components/DataTable';

const RidesPage = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      const data = await getRides();
      setRides(data);
    };
    fetchRides();
  }, []);

  return (
    <div>
      <h1>Gerenciamento de Corridas</h1>
      <DataTable data={rides} columns={['ID', 'Passageiro', 'Motorista', 'Status']} />
    </div>
  );
};

export default RidesPage;