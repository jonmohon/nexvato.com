import React from 'react';
import '../pages/Dashboard.css';

const Dashboard = ({ signOut, user }) => {
  return (
    <div>
      <main>
        <h1>Hello {user ? user.username : 'Guest'}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    </div>
  );
};

export default Dashboard;
