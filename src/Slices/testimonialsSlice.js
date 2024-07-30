// src/Slices/testimonialsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: [
    { id: 1, author: "John Johnny", email: "John.Johnny@gmail.com", message: "Great experience!", date: "2023-07-10", rating: 5 },
    { id: 2, author: "Jane Smith", email: "Jane.Smith@gmail.com", message: "Highly recommended!", date: "2023-07-12", rating: 4 },
    { id: 3, author: "Sarah Ahmed", email: "Sarah.Ahmed@gmail.com", message: "Good job!", date: "2023-09-12", rating: 4 }
  ],
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    editTestimonial: (state, action) => {
      const { id, updatedData } = action.payload;
      const testimonial = state.find(t => t.id === id);
      if (testimonial) {
        Object.assign(testimonial, updatedData);
      }
    },
    deleteTestimonial: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTestimonial, editTestimonial, deleteTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
