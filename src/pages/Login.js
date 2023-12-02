// src/pages/Login.js
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    window.location.href = 'https://nexvatoauth-dev.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=3b3em3996f5vl9j2k63bv81h87&redirect_uri=https://app.nexvato.com/dashboard/ ';
  }, []);

  return (
    <div>
      <p>Redirecting to login...</p>
    </div>
  );
};

export default Login;
