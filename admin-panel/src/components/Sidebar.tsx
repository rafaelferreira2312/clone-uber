import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/users">Usuários</Link></li>
          <li><Link href="/rides">Corridas</Link></li>
          <li><Link href="/transactions">Transações</Link></li>
          <li><Link href="/feedbacks">Feedbacks</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;