import React from 'react'
import {useState} from 'react'

function ItemCount() {

    const [aumentar, setContador] = useState(1)

    const aumentarCart= () =>{
        setContador(aumentar + 1)
    }
    const disminuirCart= () =>{
        if (aumentar !== 1) {
            setContador(aumentar - 1)
        }
    }
    const addToCart= () =>{
        console.log("Usted ha agregado" + " " +  aumentar + " " + "prendas a su carro de compras");
    }
    
    return (
        <div className="itemCount">
           <div className="contAddCart">
               <input type="button" value="-" className="menos" onClick={disminuirCart}/>
               <input type="text" step="1" min="1" name="cantidad" value={aumentar} className="cantidad"/>
               <input type="button" value="+" className="mas" onClick={aumentarCart}/>
           </div>
           <div>
               <button className="btnAddCart" onClick={addToCart}>ADD TO CART</button>
           </div>
        </div>
    )
}

export default ItemCount
