// Dashboard.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path accordingly
import './Dashboard.css';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="dashboard-container">
      <main>
        <h1>Hello {user ? user.username : 'Guest test'}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    </div>
  );
};

export default Dashboard;
