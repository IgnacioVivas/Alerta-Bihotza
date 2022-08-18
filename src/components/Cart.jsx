import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'



function Cart({ aumentarCart, disminuirCart }) {

    const { cart, totalPrice, removeItem, clear } = useCartContext()

    return (
        <div className="cart">
            {cart.length === 0 ?
                <div className="contNoHayProductos">
                    <h5>Su carrito está vacío.</h5>
                    <Link to={`/`}>
                        <button>volver a la tienda</button>
                    </Link>
                </div>
                :
                <div className="contenedor container">
                    <div className="row titulosTablaCart">

                        <div className="col col-md-1" id='pCart'><p></p></div>
                        <div className="col-1 col-md-3"><p></p></div>
                        <div className="col-3 col-md-3"><p>product</p></div>
                        <div className="col-2 col-md-1"><p>price</p></div>
                        <div className="col-3 col-md-3"><p>quantity</p></div>
                        <div className="col-2 col-md-1"><p>total</p></div>

                    </div>

                    <>
                        {
                            cart.map((producto) =>

                                <div className="row contProduct">
                                    <div className="col-1 col-md-1 productDescription"><i className="ri-delete-bin-line" id={producto.item.id} onClick={removeItem}></i></div>
                                    <div className="col col-md-3 productDescription" id='imgCart'><img src={producto.item.imagenId} alt="" /></div>
                                    <div className="col-3 col-md-3 productDescription"><p className='p'>{producto.item.title}</p></div>
                                    <div className="col-2 col-md-1 productDescription"><p className='p'>${producto.item.price}</p></div>
                                    <div className="col-3 col-md-3 productDescription">
                                        <input type="button" defaultValue="-" id={producto.item.id} className="contadores" onClick={disminuirCart} />
                                        <p step="1" min="1" name="cantidad" className="cantidad p">{producto.quantity}</p>
                                        <input type="button" defaultValue="+" id={producto.item.id} className="contadores" onClick={aumentarCart} />
                                    </div>
                                    <div className="col-2 col-md-1 productDescription"><p className='p'>${producto.item.price * producto.quantity}</p></div>
                                </div>

                            )}
                    </>
                    <div className="row tabla" >

                        <div className="col-1 col-md-1 contP"><p></p></div>
                        <div className="col-1 col-md-3 contP"><p></p></div>
                        <div className="col-6 col-md-3 contUltimaLinea"><button onClick={clear}>clean car</button></div>
                        <div className="col col-md-1 contP"><p></p></div>
                        <div className="col-3 col-md-3 contUltimaLinea"><p>cart totals</p></div>
                        <div className="col-2 col-md-1 contUltimaLinea"><p>${totalPrice()}</p></div>

                    </div>

                    <Link to={`/checkout`}>
                        <button>Proceder al pago</button>
                    </Link>

                </div>
            }
        </div>
    )
}

export default Cart
