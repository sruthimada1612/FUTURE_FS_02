import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all fields before submitting.');
      return;
    }
    setStatusMessage('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleInputChange}></textarea>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
      {statusMessage && <p className="form-status">{statusMessage}</p>}
    </section>
  );
}

export default Contact;