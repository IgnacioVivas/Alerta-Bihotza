import React from 'react'
import { useCartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {

    const { id, imagenId, category, title, price, categoyId, description } = producto

    const {addToCart} = useCartContext()

    const onAdd= (count) =>{
        console.log("Usted ha agregado" + " " +  count + " " + "prendas a su carro de compras");
        addToCart(producto, count)
    }

    return (
        <div className="contItemDetail">
            <div className="contenedor">
                <div className= "contSeccionDescripcion">
                    <div className= "contImg">
                        <img src={imagenId} alt="" />
                    </div>
                    <div className= "contDescripcionYMeta">
                        <div className= "contTitle">
                            <h1>{title}</h1>
                            <div className= "contPrecio">
                                <p>${price}</p>
                            </div>
                            <div className= "contDescripcion">
                                <p>{description}</p>
                            </div>
                            <ItemCount initial={1} stock={8} onAdd={onAdd} ></ItemCount>
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

