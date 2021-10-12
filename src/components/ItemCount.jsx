import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ItemCount({ initial, stock, onAdd }) {

    const [count, setContador] = useState(initial)
    const [cambiarBtn, setCambiarBtn] = useState(false)

    const aumentarCart = () => {
        if (count < stock) {
            setContador(count + 1)
        }
    }
    const disminuirCart = () => {
        if (count !== 1) {
            setContador(count - 1)
        }
    }
    const addToCart = () => {
        onAdd(count)
        setContador(initial)
        setCambiarBtn(true)
    }
    
    return (
        <div className="itemCount">
            <div className="contAddCart">
                <input type="button" defaultValue= "-" className= "menos" onClick= {disminuirCart} />
                <button step= "1" min= "1" name= "cantidad" className="cantidad">{count}</button>
                <input type="button" defaultValue= "+" className= "mas" onClick= {aumentarCart} />
            </div>
            <div>
                {
                    cambiarBtn ?
                        <Link to={`/cart`}>
                            <button className="btnAddCart">Terminar compra</button>
                        </Link>
                        :
                        <button className="btnAddCart" onClick={addToCart}>ADD TO CART</button>
                }
            </div>
        </div>
    )
}

export default ItemCount
