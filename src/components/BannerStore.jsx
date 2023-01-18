import clientUno from '../assets/images/client-1.png';
import clientDos from '../assets/images/client-2.png';
import clientTres from '../assets/images/client-3.png';
import clientCuatro from '../assets/images/client-4.png';
import '../assets/styles/bannerStore.scss';

function BannerStore() {
  return (
    <div className='img-store-container'>
      <img src={clientUno} alt='' className='img-store'></img>
      <img src={clientDos} alt='' className='img-store'></img>
      <img src={clientTres} alt='' className='img-store'></img>
      <img src={clientCuatro} alt='' className='img-store'></img>
    </div>
  );
}

export default BannerStore;
