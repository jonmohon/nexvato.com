// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      {({ signOut, user }) => (
          <main>
            <h1>Hello {user ? user.username : 'Guest'}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
    </div>
  );
};

export default Dashboard;
