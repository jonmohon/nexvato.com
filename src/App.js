import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import './App.css';
import Dashboard from './pages/Dashboard';

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="app-container">
      <Authenticator>
        <Dashboard/>
      </Authenticator>
    </div>
  );
};

export default App;
