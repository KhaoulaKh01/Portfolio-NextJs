//App.js

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Testimonials from './Components/Testimonials';

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  return (
    <Router>
      <div>
        <button onClick={() => setShowSignIn(true)}>Sign In</button>
        {showSignIn && <SignIn onClose={handleSignInClose} />}
        <Routes>
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


