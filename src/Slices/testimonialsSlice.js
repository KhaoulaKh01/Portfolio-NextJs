// src/Slices/testimonialsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Données initiales à utiliser si le localStorage est vide
const initialData = [
  { id: 1, author: "John Johnny", email: "John.Johnny@gmail.com", message: "Great experience!", date: "2023-07-10", rating: 5 },
  { id: 2, author: "Jane Smith", email: "Jane.Smith@gmail.com", message: "Highly recommended!", date: "2023-07-12", rating: 4 },
  { id: 3, author: "Sarah Ahmed", email: "Sarah.Ahmed@gmail.com", message: "Good job!", date: "2023-09-12", rating: 4 }
];

// Charger les données depuis le localStorage ou utiliser les données initiales
const initialState = JSON.parse(localStorage.getItem('testimonials')) || initialData;

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action) => action.payload,
    addTestimonial: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('testimonials', JSON.stringify(state));
      console.log('Testimonial added:', action.payload);
    },
    editTestimonial: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex(testimonial => testimonial.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
        localStorage.setItem('testimonials', JSON.stringify(state));
        console.log('Testimonial edited:', state[index]);
      }
    },
    deleteTestimonial: (state, action) => {
      const id = action.payload;
      const newState = state.filter(testimonial => testimonial.id !== id);
      localStorage.setItem('testimonials', JSON.stringify(newState));
      console.log('Testimonial deleted:', id);
      return newState;
    },
  },
});

export const { setTestimonials, addTestimonial, editTestimonial, deleteTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
