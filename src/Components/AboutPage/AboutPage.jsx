import React from 'react';
import './AboutPage.css';
import aboutImage from '../../Assets/about.jpg';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='content'>
        <div className='about-image'>
          <h1 className='about-title'>About Me</h1>
          <img src={aboutImage} alt='About Me' />
        </div>
        <div className='text'>
          <p>Hi there, nice to meet you!</p>
          <p>
            My name is Aona. I am a UX researcher living in San Francisco,
            California. Currently, I work as a UXR lead on next-generation
            Google Search experience.
          </p>
          <p>
            Aside from being a full-time UXR, I am also a video creator on
            YouTube (@AonaTalks), where I make educational videos about UX
            Research and career tips.
          </p>
          <p>
            For questions and business inquiries, please contact{' '}
            <a href='mailto:aona.ux@gmail.com'>aona.ux@gmail.com</a>.
          </p>

          <h3 className='up-padding'>My Journey as a UXR</h3>
          <ul>
            <li>2020 - Present: UXR Lead, Google</li>
            <li>2019 - 2020: Experience Researcher, Airbnb</li>
            <li>2017 - 2019: UX Researcher, Sumo Logic</li>
            <li>2016 - 2017: UX Research Assistant (Contract), Google</li>
            <li>2016: UX Research Intern, Disney Parks and Resorts</li>
            <li>2015 - 2016: Market Research Intern, Ericsson</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
