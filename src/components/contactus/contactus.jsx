import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../../assets/logo.png"; // Ensure the logo path is correct
import { Link } from 'react-scroll';

const ContactAndEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    query: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      contactNumber: '',
      query: '',
    });
  };

  return (
    <>
    <div className="text-white py-16 min-h-screen" style={{ backgroundColor: '#3c3f45' }}>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <div>
            {/* Logo and Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <img src={logo} alt="Logo" className="w-36 h-12 lg:w-52 lg:h-16" />
                <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400 ml-4">VS Fitness Gym</h2>
              </div>
              <p className="text-lg lg:text-xl leading-relaxed mb-6">
                Transform your life with our comprehensive fitness programs, personalized guidance, and a supportive community.
              </p>
              <div className="text-lg lg:text-xl">
                <div className="flex items-center mb-2">
                  <i className="fas fa-clock text-yellow-400 mr-3"></i>
                  <p>Monday - Saturday: 5:30 AM - 9:00 PM</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-yellow-400 mr-3"></i>
                  <p>Sunday: Holiday</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">Contact Info</h3>
            <div className="text-lg lg:text-xl">
              <div className="flex items-center mb-3">
                <i className="fas fa-map-marker-alt text-yellow-400 mr-3"></i>
                <p>No.3/804, Avadi road Sennerkuppam Poonamallee, Chennai, Tamil Nadu 600056, India</p>
              </div>
              <div className="flex items-center mb-3">
                <i className="fas fa-phone text-yellow-400 mr-3"></i>
                <p>+91 9962766412 / 7448521279</p>
              </div>
              <div className="flex items-center mb-3">
                <i className="fas fa-envelope text-yellow-400 mr-3"></i>
                <p>vsfitness2024@gmail.com</p>
              </div>
            </div>

            {/* Social Handles */}
            <h3 className="text-2xl font-semibold text-gray-300 mb-8">Follow Us</h3>
            <div className="flex space-x-6">
              <FaFacebookF className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-300 text-4xl" />
              <a href="https://www.instagram.com/vs_fitness26/profilecard/?igsh=MWtla3pzYmhhZDMxYg==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-300 text-4xl" />
  </a>
              <FaYoutube className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition duration-300 text-4xl" />
            </div>
          </div>

          {/* Right Side: Gym Enquiry Form */}
          <div>
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#3c3f45' }}>
              <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Gym Enquiry Form</h2>
              {submitted ? (
                <div className="text-center text-green-600 font-semibold">
                  Thank you! Your enquiry has been submitted.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="mb-6">
                    <label className="block mb-2 text-yellow-400" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      required
                    />
                  </div>

                  {/* Contact Number Input */}
                  <div className="mb-6">
                    <label className="block mb-2 text-yellow-400" htmlFor="contactNumber">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      required
                      pattern="[0-9]{10}" // Simple validation for a 10-digit phone number
                      placeholder="10-digit phone number"
                    />
                  </div>

                  {/* Query Input */}
                  <div className="mb-6">
                    <label className="block mb-2 text-yellow-400" htmlFor="query">
                      Query
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      required
                      placeholder="Enter your query here..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-300"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 VS Fitness Gym. Developed by <span className="font-semibold">Deena D</span></p>
        </div>
      </footer>
    
    </>
  );
};

export default ContactAndEnquiry;
