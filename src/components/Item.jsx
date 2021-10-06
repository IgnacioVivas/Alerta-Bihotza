import React from 'react'
import { Link } from 'react-router-dom'


function Item({ producto }) {
    const { id, imagenId, category, title, price } = producto
     return (
        <>
            <Link to={`/detalle/${id}`}>
                <li  className="listaDeProductos">

                    <div className="contSeccionProduct">
                            <span className="contImg">
                                <img src={imagenId} alt="" />
                            </span>
                    </div>

                    <div className="productCategories">
                        <span>{category}</span>
                    </div>

                    <div className="productInfo">
                        <h4>{title} </h4>
                        <div className="separadorTitlePrice"></div>
                        <span className="price">${price} </span>
                    </div>

                </li>
                </Link>



        </>
    )
}

export default Item
