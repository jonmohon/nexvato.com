import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";

import './App.css';

import { AuthProvider } from './contexts/AuthContext'; // Adjust the path accordingly
import Dashboard from './pages/Dashboard';
import awsExports from './aws-exports';

Amplify.configure(awsExports);


const App = () => {
  return (
    <div className="app-container">
      <AuthProvider>
      <div className="app-container">
        <Dashboard />
      </div>
    </AuthProvider>
    </div>
  );
};

export default App;
