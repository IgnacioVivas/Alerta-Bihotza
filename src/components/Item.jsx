import React from 'react'

function Item({producto}) {

    return (
        <>  
        
            <li key= {producto.id} className="listaDeProductos">

                                            <div className="contSeccionProduct">
                                                <a href="">
                                                    <span className="contImg">
                                                        <img src={producto.imagen} alt="" />
                                                    </span>
                                                </a>
                                            </div>

                                            <div className="productCategories">
                                                <a href="">{producto.categoria}</a>
                                            </div>

                                            <a href="" className="productInfo">
                                                <h4>{producto.title} </h4>
                                                <div className="separadorTitlePrice"></div>
                                                <span className="price">{producto.precio} </span>
                                            </a>

                                         </li>
            
                       
        </>
    )
}

export default Item
