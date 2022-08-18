
import React from 'react'
import Item from './Item'


function ItemList({ arrayProductos }) {

    return (
    
        <div className="container-fluid cont">
            <div className="row contTituloYRaya">
                <div className="contTitulo">
                    <h2>summer collection</h2>
                </div>
                <div className="contRaya"></div>
            </div>
            <div className="row flex-gap">
                    {arrayProductos && arrayProductos.map((producto) => <Item  producto={producto} key={producto.id}></Item>)}
            </div>
        </div>
    )
}

export default ItemList
