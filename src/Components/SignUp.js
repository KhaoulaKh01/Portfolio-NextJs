//SignUp.js
'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Slices/authSlice";

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      alert('User already registered');
      return;
    }

    // Register the new user
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    dispatch(register(newUser));
    onClose(); // Close the modal after registration
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
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
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SignUp;
