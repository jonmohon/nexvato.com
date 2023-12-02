// App.js
import React from 'react';
import { Amplify, withAuthenticator } from 'aws-amplify';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Dashboard from './pages/Dashboard';
import './App.css';

Amplify.configure(awsExports);

const App = () => (
  <div className="app-container">
    <Router>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        {({ history }) => (
          <Authenticator
            onStateChange={(authState) => {
              if (authState === 'signIn') {
                history.push('/dashboard');
              }
            }}
          >
            {({ signOut, user }) => (
              <Dashboard user={user} signOut={signOut} />
            )}
          </Authenticator>
        )}
      </Route>
    </Router>
  </div>
);

export default withAuthenticator(App);
