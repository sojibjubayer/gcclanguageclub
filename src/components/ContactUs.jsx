import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., sending to an API)
    alert('Your message has been submitted!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700">Contact Us</h2>
          <p className="text-lg text-gray-700 mt-4">
            We’d love to hear from you! Feel free to reach out via WhatsApp, email, or the contact form below.
          </p>
        </header>

        {/* Contact Details Section */}
        <section className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-purple-700">Reach Out to Us</h3>
          <div className="mt-6">
            <p className="text-lg text-gray-700">
              <strong>WhatsApp:</strong>
              <a
                href="https://wa.me/+8801328991754"
                className="text-purple-600 hover:text-purple-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                +8801328991754
              </a>
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Email:</strong>
              <a
                href="mailto:sojibjubayer@gmail.com"
                className="text-purple-600 hover:text-purple-700"
              >
                sojibjubayer@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white shadow-md rounded-md p-8 mb-16">
          <h3 className="text-3xl font-semibold text-purple-700 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
