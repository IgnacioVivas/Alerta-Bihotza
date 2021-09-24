import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function clickearProducto(event) {
    console.log(event)
}



function Item({ producto }) {
    const { id, imagenId, category, title, price, categoyId, descripcion } = producto
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
                        <Link>{category}</Link>
                    </div>

                    <a className="productInfo">
                        <h4>{title} </h4>
                        <div className="separadorTitlePrice"></div>
                        <span className="price">${price} </span>
                    </a>

                </li>
                </Link>



        </>
    )
}

export default Item
