
import React from 'react'
import Item from './Item'





function ItemList({arrayProductos}) {
 
    return (
        <div className="contenedor">
            <div className="contTituloYRaya">
                <div className="contTitulo">
                    <h2>summer collection</h2>
                </div>
                <div className="contRaya"></div>
            </div>
            <ul className="contListaProductos">
                {arrayProductos && arrayProductos.map((producto)=> <Item producto= {producto} key={producto.id}></Item>)}
            </ul>
        </div>
    )
}

export default ItemList
