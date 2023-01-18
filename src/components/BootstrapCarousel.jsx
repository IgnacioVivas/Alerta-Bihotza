import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/slide-1.jpg';
import img2 from '../assets/images/slide-2.jpg';
import img3 from '../assets/images/slide-3.jpg';
import '../assets/styles/bootstrapCarousels.scss';

function BootstrapCarousel() {
  return (
    <Carousel fade style={{ height: '87vh' }}>
      <Carousel.Item>
        <img className='d-block w-100' style={{ height: '87vh' }} src={img1} alt='First slide' />
        <Carousel.Caption className='title-layout unoCaption'>
          <h1 className='titleCaption' id='titleBlack'>
            Minimalism <br /> Spring <br /> Collection
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' style={{ height: '87vh' }} src={img2} alt='Second slide' />

        <Carousel.Caption className='title-layout '>
          <h1 className='titleCaption '>Summer Sale</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra sit amet sapien
            et semper. Vestibulum at purus luctus
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' style={{ height: '87vh' }} src={img3} alt='Third slide' />

        <Carousel.Caption className='title-layout tresCaption'>
          <h1 className='titleCaption'>
            Sao Paulo <br /> Fashion Week
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra sit amet sapien
            et semper. Vestibulum alt purus luctus, ultrices turpis vitae, mattis lectus. Duis
            posuere sed libero
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;
