import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { getFirestore } from '../service/GetFireBase';
import firebase from 'firebase/app'
import 'firebase/firestore'


function CheckOut() {

    const { cart, totalPrice, clear } = useCartContext()
    const [formData, setFormData] = useState(initialState)
    const [orderBuy, setOrderBuy] = useState()


    function infoForm(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function formSubmit(e) {
        e.preventDefault()

        if (formData.email === formData.revalidarEmail) {
            const newOrder = {
                buyer: formData,
                items: cart,
                total: totalPrice(),
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            }
            const baseDeDatos = getFirestore()
            const orders = baseDeDatos.collection("orders")
    
            orders.add(newOrder)
                .then(resp => {
                    setOrderBuy(resp.id)
                    alert("Su compra fue un éxito. Su número de orden es " + orderBuy + ".")
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setFormData(initialState)
                    clear()
                })
            
        } else {
            alert("Los emails no coinciden")
        }




    }
    
    return (

        <div className="contenedor">
            <div className="contCheckOut">
                <form onChange={infoForm} onSubmit={formSubmit}>
                    <div className="tituloForm">
                        <h2>Detalles de facturación</h2>
                    </div>
                    <div className="nombreYapellido">
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="nombre" defaultValue={formData.nombre} />
                        </div>
                        <div>
                            <label htmlFor="">Apellido</label>
                            <input type="text" name="apellido" defaultValue={formData.apellido} />
                        </div>
                    </div>

                    <div className="emailYtelefono">
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" defaultValue={formData.email} />
                        </div>
                        <div>
                            <label htmlFor="">Telefono</label>
                            <input type="text" name="telefono" defaultValue={formData.telefono} />
                        </div>
                    </div>

                    <div className="contDireccion">
                        <div>
                            <label htmlFor="">Revalidar Email</label>
                            <input type="email" name="revalidarEmail" defaultValue={formData.revalidarEmail} />
                        </div>
                    </div>

                    <div className="contDireccion">
                        <div>
                            <label htmlFor="">Direccion</label>
                            <input type="text" name="direccion" defaultValue={formData.direccion} />
                        </div>
                    </div>

                    <div className="ciudadYlocalidad">
                        <div>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" name="ciudad" defaultValue={formData.ciudad} />
                        </div>
                        <div>
                            <label htmlFor="">Localidad</label>
                            <input type="text" name="localidad" defaultValue={formData.localidad} />
                        </div>
                        <div>
                            <label htmlFor="">Codigo Postal</label>
                            <input type="text" name="codigoPostal" defaultValue={formData.codigoPostal} />
                        </div>
                    </div>

                    <div className="contDetalleCompra">
                        <div className="descripcionCompra">
                            <h2>Su pedido</h2>
                        </div>
                        <div className="titulos">
                            <h3>Producto</h3>
                            <h3>Total</h3>
                        </div>

                        {
                            cart.map((producto) => <div key={producto.item.id} className="descripcionCompra">
                                <p>{producto.item.title}</p>
                                <p>${producto.item.price}</p>
                            </div>)
                        }
                        <div className="descripcionCompra">
                            <p>Subtotal</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="descripcionCompra ultimaLinea">
                            <p>Total</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="descripcionCompra contRealizarCompra">
                            <p></p>
                            <button>realizar pedido</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>

        
    )
}

const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    revalidarEmail: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    localidad: '',
    codigoPostal: '',
}

export default CheckOut
