import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function clickearProducto(event) {
    console.log(event)
}



function Item({ producto }) {
    const { id, imagen, categoria, title, precio, categoyId, descripcion } = producto
     return (
        <>
            <Link to={`/detalle/${id}`}>
                <li key={producto.id} className="listaDeProductos">

                    <div className="contSeccionProduct">
                            <span className="contImg">
                                <img src={producto.imagen} alt="" />
                            </span>
                    </div>

                    <div className="productCategories">
                        <Link>{producto.categoria}</Link>
                    </div>

                    <a className="productInfo">
                        <h4>{producto.title} </h4>
                        <div className="separadorTitlePrice"></div>
                        <span className="price">{producto.precio} </span>
                    </a>

                </li>
                </Link>



        </>
    )
}

export default Item
