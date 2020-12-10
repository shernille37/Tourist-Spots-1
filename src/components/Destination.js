import React from 'react';
import '../assets/styles/Destination.css';

const Destination = ({ img, caption, type }) => {
  return (
    <div className='destination'>
      <div className='img-container'>
        <img src={img} alt='Destination' />
        <p className='type'>{type}</p>
      </div>
      <div className='caption'>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Destination;
