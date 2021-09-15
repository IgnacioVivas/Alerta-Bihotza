import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {
    return (
        <div className="contItemDetail">
            <div className="contenedor">
                <div className= "contSeccionDescripcion">
                    <div className= "contImg">
                        <img src={producto.imagen} alt="" />
                    </div>
                    <div className= "contDescripcionYMeta">
                        <div className= "contTitle">
                            <h1>{producto.title}</h1>
                            <div className= "contPrecio">
                                <p>{producto.precio}</p>
                            </div>
                            <div className= "contDescripcion">
                                <p>{producto.descripcion}</p>
                            </div>
                            <ItemCount></ItemCount>
                            <div className="productMeta">
                                <p>Categoria: <span>{producto.categoria}</span></p>
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
