import banner from '../assets/images/banner.jpg';
import '../assets/styles/Banner.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showTitle, setShowTitle] = useState();

  useEffect(() => {
    if (currentPath.includes('/categoria/hombre')) {
      setShowTitle('hombre');
    } else if (currentPath.includes('/categoria/mujer')) {
      setShowTitle('mujer');
    } else {
      setShowTitle('store');
    }
  }, [currentPath]);

  return (
    <div className='container-fluid contBanner'>
      <div className='row' style={{ backgroundImage: `url(${banner})` }}>
        <div className='col'>
          <h2>{showTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
