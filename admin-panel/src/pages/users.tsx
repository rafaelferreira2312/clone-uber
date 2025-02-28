import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import DataTable from '../components/DataTable';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <DataTable data={users} columns={['ID', 'Nome', 'Email', 'Tipo']} />
    </div>
  );
};

export default UsersPage;