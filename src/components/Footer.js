import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About App Manager</h3>
        <p>
          The Task Manager app helps you organize your tasks effectively with easy categorization and a user-friendly interface. Track, manage, and set priorities with ease.
        </p>
      </div>
      <div className="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Details</h3>
        <p><strong>Email:</strong> support@taskmanager.com</p>
        <p><strong>Phone:</strong> (+92) 111-1111111</p>
      </div>
      <div className="footer-section">
        <h3>Our Location</h3>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.811276524782!2d73.02465400000001!3d33.713832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5967d48243%3A0xcb2c90c562c4687e!2sAir%20University%20Islamabad!5e0!3m2!1sen!2s!4v1735495766427!5m2!1sen!2s"
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
      
      <div className="sub-footer">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
