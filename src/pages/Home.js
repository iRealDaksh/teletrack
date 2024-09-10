import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaGasPump, FaRoute, FaShieldAlt, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styled from '@emotion/styled';
import './Home.css';
import backgroundVideo from '../assets/backHome.mp4';

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #0072ff;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate('/login');
  };

  const features = [
    {
      icon: <FaTruck />,
      title: 'Real-time Tracking',
      description: 'Monitor your fleet\'s location and status in real-time, ensuring optimal route management and timely deliveries.'
    },
    {
      icon: <FaGasPump />,
      title: 'Fuel Management',
      description: 'Optimize fuel consumption with advanced analytics, reducing costs and improving overall fleet efficiency.'
    },
    {
      icon: <FaRoute />,
      title: 'Route Optimization',
      description: 'Utilize AI-powered algorithms to determine the most efficient routes, saving time and resources.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Driver Safety',
      description: 'Enhance driver safety with behavior monitoring and real-time alerts, promoting a culture of responsible driving.'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <video autoPlay muted loop className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>TeleTrack</h1>
          <p>Revolutionizing Fleet Management with Cutting-Edge Telematics</p>
          <motion.button
            onClick={handleStartTracking}
            className="cta-button"
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }} 
          >
            Start Tracking <FaArrowRight style={{ marginLeft: '10px' }} />
          </motion.button>
        </motion.div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Optimize Your Fleet?</h2>
        <p>Join thousands of satisfied customers and experience the TeleTrack difference today.</p>
        <motion.button
          onClick={handleStartTracking}
          className="cta-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now <FaArrowRight style={{ marginLeft: '10px' }} />
        </motion.button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>TeleTrack</h3>
            <p>Revolutionizing fleet management with cutting-edge telematics solutions.</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              
              <li><Link to="/features">Features</Link></li>
              
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><FaPhone /> +91 1234567890</p>
            <p><FaEnvelope /> info@teletrack.com</p>
            <p><FaMapMarkerAlt /> VIT Chennai, Kelambakkam</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TeleTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
