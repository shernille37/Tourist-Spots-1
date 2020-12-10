import React from 'react';
import '../assets/styles/Content.css';
import Destination from './Destination';
import { Destinations as Places } from '../Places';

const Content = () => {
  return (
    <div className='content container'>
      <h3>Check out these EPIC Destinations!</h3>
      <div className='places'>
        <div>
          {Places.map(
            (place, i) =>
              i <= 1 && (
                <Destination
                  key={place.id}
                  img={place.img}
                  type={place.type}
                  caption={place.caption}
                />
              )
          )}
        </div>

        <div>
          {Places.map(
            (place, i) =>
              i > 1 && (
                <Destination
                  key={place.id}
                  img={place.img}
                  type={place.type}
                  caption={place.caption}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
