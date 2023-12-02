import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import './App.css'; // Import the CSS file

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="app-container"> {/* Use className instead of style */}
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user ? user.username : 'Guest'}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default App;
