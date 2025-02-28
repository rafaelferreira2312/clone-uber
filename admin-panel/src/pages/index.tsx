import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <p>Bem-vindo ao painel administrativo do Uber Clone.</p>
      </main>
    </div>
  );
};

export default Dashboard;