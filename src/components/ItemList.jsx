import BannerStore from './BannerStore';
import Item from './Item';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemList({ arrayProductos }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showBannerStore, setShowBannerStore] = useState(false);
  const [putStyles, setPutStyles] = useState('90px');

  useEffect(() => {
    if (currentPath.includes('/categoria/hombre') || currentPath.includes('/categoria/mujer')) {
      setShowBannerStore(true);
      setPutStyles('0px');
    } else {
      setShowBannerStore(false);
      setPutStyles('90px');
    }
  }, [currentPath]);

  return (
    <>
      <div className='container-fluid cont'>
        <div className='row contTituloYRaya' style={{ marginTop: putStyles }}>
          <div className='contTitulo'>
            <h2>summer collection</h2>
          </div>
          <div className='contRaya'></div>
        </div>
        <div className='row flex-gap'>
          {arrayProductos &&
            arrayProductos.map((producto) => <Item producto={producto} key={producto.id}></Item>)}
        </div>
      </div>
      {showBannerStore ? <BannerStore /> : null}
    </>
  );
}

export default ItemList;
