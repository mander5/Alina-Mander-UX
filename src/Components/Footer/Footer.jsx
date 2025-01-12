// src/components/Footer/Footer.js
import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import icons
import './Footer.css'; // Make sure the CSS file is correctly linked

const Footer = () => {
  return (
    <footer className='footer'>
      <a
        href='https://www.linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        className='footer-link'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://www.youtube.com'
        target='_blank'
        rel='noopener noreferrer'
        className='footer-link'
      >
        <FaYoutube />
      </a>
      <a
        href='https://www.instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='footer-link'
      >
        <FaInstagram />
      </a>
      <a href='mailto:example@email.com' className='footer-link email'>
        example@email.com
      </a>
    </footer>
  );
};

export default Footer;
