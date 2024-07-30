// src/app/login/page.js
'use client';

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../../Components/SignIn';

const LoginPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleClose = () => {
    console.log('handleClose called');
    setShowSignIn(false);
  };

  return (
    <Router>
      {showSignIn && <SignIn onClose={handleClose} />}
    </Router>
  );
};

export default LoginPage;
