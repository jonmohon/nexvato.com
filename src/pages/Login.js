// src/pages/Login.js
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    window.location.href = 'https://nexvatoauth-dev.auth.us-west-2.amazoncognito.com/';
  }, []);

  return (
    <div>
      <p>Redirecting to login...</p>
    </div>
  );
};

export default Login;
