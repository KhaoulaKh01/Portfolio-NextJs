/*
//index.js 
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice';
import testimonialsReducer from '../Slices/testimonialsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  
});

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer
  }
});

export default store;*/

// src/Store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slices/authSlice';
import testimonialsReducer from '../Slices/testimonialsSlice'; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialsReducer // Ajoutez ceci pour les témoignages
  }
});

export default store;





