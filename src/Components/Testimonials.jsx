// src/Components/Testimonials.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTestimonial, editTestimonial, deleteTestimonial, setTestimonials } from '../Slices/testimonialsSlice';

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    author: '',
    email: '',
    message: '',
    date: '',
    rating: 1
  });

  // Exemple d'email de l'utilisateur actuel
  const currentUserEmail = 'John.Johnny@gmail.com'; // Remplacez par la logique de votre application

  // Chargement initial depuis localStorage
  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    if (storedTestimonials.length) {
      dispatch(setTestimonials(storedTestimonials));
    }
  }, [dispatch]);

  // Sauvegarde dans localStorage lors des changements
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
    console.log('LocalStorage updated:', testimonials);
  }, [testimonials]);

  const totalTestimonials = testimonials.length;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handleEdit = (id) => {
    const testimonial = testimonials.find((t) => t.id === id);
    if (testimonial.email !== currentUserEmail) {
      alert("You can only edit your own testimonials.");
      return;
    }
    const updatedMessage = prompt("Enter new message:", testimonial.message);
    if (updatedMessage) {
      dispatch(editTestimonial({ id, updatedData: { message: updatedMessage } }));
    }
  };

  const handleDelete = (id) => {
    const testimonial = testimonials.find((t) => t.id === id);
    if (testimonial.email !== currentUserEmail) {
      alert("You can only delete your own testimonials.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      dispatch(deleteTestimonial(id));
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? 0 : prevIndex - 1
      );
    }
  };

  const handleAddTestimonial = () => {
    const newId = testimonials.length ? Math.max(...testimonials.map(t => t.id)) + 1 : 1;
    dispatch(addTestimonial({ ...newTestimonial, id: newId }));
    setIsModalOpen(false);
    setNewTestimonial({
      author: '',
      email: '',
      message: '',
      date: '',
      rating: 1
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewTestimonial({
      author: '',
      email: '',
      message: '',
      date: '',
      rating: 1
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.385 2.462c-.784.57-1.839-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.622 9.398c-.784-.57-.381-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.971z" />
          </svg>
        ))}
      </div>
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-16 bg-gray-100 text-center" id="testimonials">
      <h2 className="text-4xl font-semibold text-center mt-8 text-gray-600">Testimonials</h2>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Testimonial Content */}
        <div className="mb-6">
          {currentTestimonial && renderStars(currentTestimonial.rating)}
          <p className="text-lg mb-4 text-gray-600">"{currentTestimonial?.message}"</p>
          <p className="font-semibold text-gray-900">{currentTestimonial?.author}</p>
          <p className="text-sm text-gray-500">{currentTestimonial?.date}</p>
        </div>
        
        {/* Edit and Delete Buttons */}
        <div className="flex justify-center gap-4 mb-4">
          {currentTestimonial && (
            <>
              <button
                onClick={() => handleEdit(currentTestimonial.id)}
                className="bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(currentTestimonial.id)}
                className="bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
              >
                Delete
              </button>
            </>
          )}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(totalTestimonials)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-purple-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
        
        {/* Previous and Next Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600"
          >
            &gt;
          </button>
        </div>
      </div>
      
      {/* Add Testimonial Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600"
        >
          Add Testimonial
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Add Testimonial</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Author</label>
              <input
                type="text"
                value={newTestimonial.author}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, author: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={newTestimonial.email}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, email: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                value={newTestimonial.message}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                value={newTestimonial.date}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, date: e.target.value })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rating</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: parseInt(e.target.value, 10) })}
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTestimonial}
                className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
