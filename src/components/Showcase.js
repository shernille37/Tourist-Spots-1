import React from 'react';
import '../assets/styles/Showcase.css';
import video from '../assets/videos/video-1.mp4';

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='video-container'>
        <video src={video} autoPlay muted loop />
      </div>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>

      <div className='buttons'>
        <div>Get Started</div>
        <div>
          Watch Trailer <i className='far fa-play-circle' />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
