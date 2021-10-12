
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])
    
    function addToCart(product, count) {
        if (isInCart(product.id)) { 
            const actualizarCart = [...cart];
            actualizarCart.forEach((e) =>{
                if (e.item.id === product.id) {
                    e.quantity += count
                }
            })
            setCart(actualizarCart)
        } else {
             setCart([...cart, { item: product, quantity: count }])
        }
    }

    function edditCart(product) {
        const actualizarCart = [...cart];
        setCart(actualizarCart)
    }
    const isInCart = (id) => {
        return cart.find(element => element.item.id === parseInt(id))
        
    }
    const clear = () => {
        setCart([])
    }
    const removeItem = (e) => {
        
        let itemId = e.target.id;
        const cartFilter = cart.filter((element) => element.item.id !== itemId)
        return setCart([...cartFilter])   
    }
    const iconCart = () =>{
        return cart.reduce((acumulador, valor) => acumulador + valor.quantity, 0)
    }

    const totalPrice = () =>{ 
        return cart.reduce((acumulador, valor) => (acumulador + (valor.quantity * valor.item.price)), 0)
    }
    
    return (
        <CartContext.Provider value={{ cart, addToCart, clear, removeItem, iconCart, totalPrice, edditCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
