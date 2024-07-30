"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8s9umz2', 'template_7w6zdgn', form.current, 'BPHvQ2fiVYzzippSm')
      .then((result) => {
        toast.success('Email sent successfully!');
        form.current.reset();
      }, (error) => {
        toast.error('Failed to send email.');
        console.error(error.text);
      });
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100" id="contact">
      <h2 className="text-4xl font-semibold text-center mt-8 text-gray-600">Contact</h2>
      <p className="text-center text-gray-600 mb-8">Feel free to reach out to me for any questions or opportunities!</p>
      <form className="w-full max-w-md mt-8 bg-white shadow-lg rounded-lg p-6" ref={form} onSubmit={handleSubmit}>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Email Me 🚀</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_email">Your Email</label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">Your Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-black font-bold "
          >
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
