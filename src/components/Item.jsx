import { Link } from 'react-router-dom';

function Item({ producto }) {
  // window.scroll({
  //     top: 100,
  //     left: 100,
  //     behavior: 'smooth'
  //   });
  const { id, imagenId, category, title, price, imgSecondary } = producto;
  return (
    <>
      <Link
        to={`/detalle/${id}`}
        className='col-12 col-sm-6 col-lg-3'
        style={{ textDecoration: 'none' }}
      >
        <li className='listaDeProductos'>
          <div className='contSeccionProduct'>
            <span className='contImg'>
              <img src={producto?.imgSecondary} alt='' />
            </span>
          </div>

          <div className='productCategories'>
            <span>{category}</span>
          </div>

          <div className='productInfo'>
            <h4>{title} </h4>
            <div className='separadorTitlePrice'></div>
            <span className='price'>${price} </span>
          </div>
        </li>
      </Link>
    </>
  );
}

export default Item;
