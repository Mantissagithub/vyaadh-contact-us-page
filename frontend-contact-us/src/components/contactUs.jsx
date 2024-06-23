// ContactUs.js
import React, { useState } from 'react';
import AppBar from './appbar';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.status !== 201) {
        throw new Error('Failed to submit form');
      }

      // Handle success
      alert('Form submitted successfully!');
      // Optionally, clear form fields
      setFormData({
        name: '',
        email: '',
        companyName: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      <AppBar />
      <div className="flex-1 bg-[#10102a] text-white px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-center mt-8 mb-8">CONTACT US</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Left Side Content */}
          <div className="flex-1 p-8 flex justify-center items-center">
            <div className="space-y-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="material-icons h-6 w-6 cursor-pointer">email</span>
                  <a href="mailto:teamvyadh@vit.ac.in">teamvyadh@vit.ac.in</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons h-6 w-6">phone</span>
                  <a href="tel:+919827036208">+91 9827036208</a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="material-icons h-6 w-6">location_on</span>
                  <p>VIT, Vellore Campus, Tiruvallam Rd, Katpadi, Vellore, Tamil Nadu 632014</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1 p-8">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your Message"
                    className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    rows="6"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
