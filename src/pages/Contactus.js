import React, { useState } from "react";
import './Pages.css'; 

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., send form data to an API or email)
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-page">
      <div className="contact-form-container">
        <h1 className="page-title">Get in Touch</h1>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@taskmanager.com</p>
          <p><strong>Phone:</strong> (+92) 111-1111111</p>

          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>

        <section className="location">
          <h2>Our Location</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.811276524782!2d73.02465400000001!3d33.713832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5967d48243%3A0xcb2c90c562c4687e!2sAir%20University%20Islamabad!5e0!3m2!1sen!2s!4v1735495339797!5m2!1sen!2s"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
