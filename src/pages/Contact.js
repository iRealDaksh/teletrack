import React from 'react';
import './Contact.css';
import backgroundImage from 'E:/sih/pro123/src/assets/call.jpg';

const Contact = () => (
  <div className="contact-page">
    <section className="contact-hero">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Get in touch!</p>
    
    {/* { <div
      className="contact-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >

    </div> } */}
    
    <div className="contact-form-container" >
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
    </div>
    
        
    <div className="map-container">
      <iframe
        className="map-embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225429098615!2d144.96312331535497!3d-37.81421797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee20!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1639631214542!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        title="Contact Map"
      ></iframe>
    </div>
    
    </section>
  </div>
);

export default Contact;
