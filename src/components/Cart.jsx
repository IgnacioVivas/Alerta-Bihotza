import React from 'react'
import { useCartContext } from '../context/CartContext'



function Cart() {

    const { cart, totalPrice, removeItem, clear } = useCartContext()
    console.log(cart);

    return (
        <div className="cart">
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
                            <i class="far fa-trash-alt" onClick={removeItem}></i>
                            <img src={producto.item.imagen} alt="" />
                            <p>{producto.item.title}</p>
                            <p>${producto.item.price}</p>
                            <div>
                                <input type="button" value="-" className="contadores" />
                                <input type="text" step="1" min="1" name="cantidad" value={producto.quantity} className="cantidad" />
                                <input type="button" value="+" className="contadores" />
                            </div>
                            <p>${totalPrice()}</p>
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
            </div>
        </div>
    )
}

export default Cart
