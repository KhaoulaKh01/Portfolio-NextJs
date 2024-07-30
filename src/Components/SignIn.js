//SignIn.js
'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Slices/authSlice'; // Assurez-vous que ce chemin est correct
import SignUp from './SignUp'; // Assurez-vous que ce chemin est correct
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      alert('User not registered or incorrect password');
      return;
    }

    dispatch(login({ email, password }));
    
    if (typeof onClose === 'function') {
      onClose(); // Close the modal after submission
      navigate('/testimonials'); // Navigate to Testimonials after closing the modal
    } else {
      console.error('onClose is not a function');
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <h2 className="text-xl font-bold mb-4">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
            <p className="mt-4 text-center">
              Don&apos;t have an account?{' '}
              <button
                onClick={handleSignUpClick}
                className="text-blue-500 underline"
              >
                Sign Up
              </button>
            </p>
          </form>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600"
          >
            &times;
          </button>
        </div>
      </div>
      {showSignUp && <SignUp onClose={handleSignUpClose} />}
    </div>
  );
};

export default SignIn;
