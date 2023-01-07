import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Banner from './Banner';

function ItemDetail({ producto }) {
  const { imagenId, category, title, price, description, stock } = producto;

  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    addToCart(producto, count);
  };

  return (
    <div className='contItemDetail'>
      <Banner />

      <div className='container-fluid contenedor'>
        <div className='row contSeccionDescripcion'>
          <div className='col-12 col-lg-5'>
            <div className='contImg'>
              <img src={imagenId} alt='' />
            </div>
          </div>
          <div className='col-12 col-lg-6 contTitle'>
            <h1>{title}</h1>
            <div className='contPrecio'>
              <p>${price}</p>
            </div>
            <div className='contDescripcion'>
              <p>{description}</p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}></ItemCount>
            <div className='productMeta'>
              <p>
                Category: <span>{category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
