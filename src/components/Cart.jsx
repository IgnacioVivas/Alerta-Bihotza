import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'



function Cart() {

    const { cart, totalPrice, removeItem, clear, edditCart } = useCartContext()
    console.log(cart);

    ////////////////
    
    const aumentarCart = (e) => {
        const id = e.target.id;

        const actualizarCart = [...cart];
        for (let i = 0; i < actualizarCart.length; i++) {
            if (actualizarCart[i].item.id === id) {
                if (actualizarCart[i].item.stock > actualizarCart[i].quantity  ) {
                    actualizarCart[i].quantity = actualizarCart[i].quantity +1;
                    edditCart(actualizarCart[i]);
                }
               
                break;
            }
        }
    }
    const disminuirCart = (e) => {
        const id = e.target.id;

        const actualizarCart = [...cart];
        for (let i = 0; i < actualizarCart.length; i++) {
            if (actualizarCart[i].item.id === id) {
                if (actualizarCart[i].quantity !== 0 ) {
                    actualizarCart[i].quantity = actualizarCart[i].quantity -1;
                    edditCart(actualizarCart[i]);
                }
               
                break;
            }
        }
    }
    ////////////////


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
                <div className="contenedor">
                    <div className="titulosCart tabla">
                        <p></p>
                        <p></p>
                        <p>product</p>
                        <p>price</p>
                        <p>quantity</p>
                        <p>total</p>
                    </div>
                    <>
                        {
                            cart.map((producto) => <div key={producto.item.id} className="item tabla">
                                <i className="ri-delete-bin-line" id={producto.item.id} onClick={removeItem}></i>
                                <img src={producto.item.imagenId} alt="" />
                                <p>{producto.item.title}</p>
                                <p>${producto.item.price} x {producto.quantity}</p>
                                <div>
                                    <input type="button" defaultValue="-" id= {producto.item.id} className="contadores"   onClick={disminuirCart}/>
                                    <p step="1" min="1" name="cantidad" className="cantidad">{producto.quantity}</p>
                                    <input type="button" defaultValue="+" id= {producto.item.id} className="contadores"   onClick={aumentarCart} />
                                </div>
                                <p>${producto.item.price * producto.quantity}</p>
                            </div>)}
                    </>
                    <div className="tabla totalTotal" >
                        <p></p>
                        <p></p>
                        <button onClick={clear}>clean car</button>
                        <p></p>
                        <p>cart totals</p>
                        <p>${totalPrice()}</p>
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
