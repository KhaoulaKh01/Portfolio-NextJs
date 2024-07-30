// src/Slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    users: [], // Liste des utilisateurs inscrits
  },
  reducers: {
    register: (state, action) => {
      const { email, password } = action.payload;
      const newUser = {
        id: state.users.length + 1,
        email: email,
        password: password, // Note: Stocker les mots de passe en clair n'est pas recommandé en production
        isAuthenticated: false,
        message: '',
        date: '',
        rating: 0,
      };
      state.users.push(newUser);
      state.isAuthenticated = true; // Assume que l'inscription réussit toujours pour cet exemple
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
