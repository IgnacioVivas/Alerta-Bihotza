import React from 'react'
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount'
import banner from '../assets/images/banner.jpg'

function ItemDetail({ producto }) {
    const { imagenId, category, title, price, description, stock } = producto

    const { addToCart } = useCartContext()

    const onAdd = (count) => {
        
        addToCart(producto, count)
    }

    return (
        <div className="contItemDetail">
            <div className= "contBanner">
                <img src={banner} alt="" />
                <h2>tienda</h2>
                
            </div>
            <div className="contenedor">
                <div className="contSeccionDescripcion">
                    <div className="contImg">
                        <img src={imagenId} alt="" />
                    </div>
                    <div className="contDescripcionYMeta">
                        <div className="contTitle">
                            <h1>{title}</h1>
                            <div className="contPrecio">
                                <p>${price}</p>
                            </div>
                            <div className="contDescripcion">
                                <p>{description}</p>
                            </div>
                            <ItemCount initial={1} stock={stock} onAdd={onAdd} ></ItemCount>
                            <div className="productMeta">
                                <p>Categoria: <span>{category}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail

