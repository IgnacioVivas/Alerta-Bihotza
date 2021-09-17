import React from 'react'
import { Link } from 'react-router-dom'

function clickearProducto(event) {
    console.log(event)
}



function Item({ producto }) {

    return (
        <>
            <Link> 
                <li key={producto.id} className="listaDeProductos">

                    <div className="contSeccionProduct">
                        <Link>
                            <span className="contImg">
                                <img src={producto.imagen} alt="" />
                            </span>
                        </Link>
                    </div>

                    <div className="productCategories">
                        <Link>{producto.categoria}</Link>
                    </div>

                    <Link className="productInfo">
                        <h4>{producto.title} </h4>
                        <div className="separadorTitlePrice"></div>
                        <span className="price">{producto.precio} </span>
                    </Link>

                </li>
            </Link>



        </>
    )
}

export default Item
