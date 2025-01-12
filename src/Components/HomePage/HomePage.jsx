import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger animation on mount
  }, []);

  return (
    <div className='home-page'>
      <div className={`content ${isVisible ? 'homepage-content-fade-in' : ''}`}>
        <div className='image'>
          <img src='src/Assets/profile.jpg' alt='Alina' />
        </div>
        <div className='text'>
          <h1>Hello,</h1>
          <h2>Lovely to see you here.</h2>
          <p>
            I’m Aona, currently a UXR at Google. You may have heard of me as a
            YouTube content creator at{' '}
            <a
              href='https://www.youtube.com/c/AonaTalks'
              target='_blank'
              rel='noopener noreferrer'
            >
              @AonaTalks
            </a>{' '}
            where I make free educational videos for aspiring UXRs.
          </p>
          <p>Thanks for visiting!</p>
          <div className='cta'>
            <div className='cta-ball cta-cv'>
              <span>CV</span>
            </div>
            <div className='cta-ball cta-youtube'>
              <span>YouTube</span>
            </div>
            <div className='cta-ball cta-ux'>
              <span>UX Research</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
