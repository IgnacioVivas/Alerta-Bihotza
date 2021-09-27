import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { getFirestore } from '../service/GetFireBase';
import firebase from 'firebase'
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

        const newOrder = {
            buyer: formData,
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        console.log(newOrder);
        const baseDeDatos = getFirestore()
        const orders = baseDeDatos.collection("orders")

        orders.add(newOrder)
            .then(resp => {
                setOrderBuy(resp.id)
                alert("Su compra fue un éxito. Su número de orden es " + orderBuy +".")
            })
            .catch(err => console.log(err))
            .finally(() =>{
                setFormData(initialState)
                clear()
            })

        // baseDeDatos.collection("Items").doc("zZGD2FheqEUoUrtiyG0f")
        // .update({
        //     stock: 4
        // })
        // .then(res => console.log(res))

    }
    console.log(orderBuy);
    console.log(formData);
    return (

        <div className="contenedor">
            <div className="contCheckOut">
                <form onChange={infoForm} onSubmit={formSubmit}>
                    <div className="nombreYapellido">
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} />
                        </div>
                        <div>
                            <label htmlFor="">Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} />
                        </div>
                    </div>

                    <div className="emailYtelefono">
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" value={formData.email} />
                        </div>
                        <div>
                            <label htmlFor="">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} />
                        </div>
                    </div>

                    <div className="contDireccion">
                        <div>
                            <label htmlFor="">Direccion</label>
                            <input type="text" name="direccion" value={formData.direccion} />
                        </div>
                    </div>

                    <div className="ciudadYlocalidad">
                        <div>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" name="ciudad" value={formData.ciudad} />
                        </div>
                        <div>
                            <label htmlFor="">Localidad</label>
                            <input type="text" name="localidad" value={formData.localidad} />
                        </div>
                        <div>
                            <label htmlFor="">Codigo Postal</label>
                            <input type="text" name="codigoPostal" value={formData.codigoPostal} />
                        </div>
                    </div>
                    <div>
                        <button>realizar pedido</button>
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
    telefono: '',
    direccion: '',
    ciudad: '',
    localidad: '',
    codigoPostal: '',
}

export default CheckOut
