import React from 'react';
import imgSpring from '../assets/images/home-image.jpg';
import imgSummer from '../assets/images/home-image2.jpg';

function Collection() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='cont-spring col-lg-6' style={{ backgroundImage: `url(${imgSpring})` }}>
          <h2>SPRING COLLECTION</h2>
          <div className='raya'></div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </h3>
          <button>
            <a className='link-collection'>SHOP NOW</a>
          </button>
        </div>
        <div className='cont-summer col-lg-6' style={{ backgroundImage: `url(${imgSummer})` }}>
          <h2>SUMMER COLLECTION</h2>
          <div className='raya'></div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </h3>
          <button>
            <a className='link-collection'>SHOP NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
