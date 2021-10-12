import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


function CheckOut({ formSubmit, infoForm, formData }) {

    const { cart, totalPrice } = useCartContext()

    return (

        <div className="contenedor">
            <div className="contCheckOut">
                {cart.length === 0 ?
                    <div className="contNoHayProductos">
                        <h5>Su carrito está vacío.</h5>
                        <Link to={`/`}>
                            <button>volver a la tienda</button>
                        </Link>
                    </div>
                    :
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
                                    <p>{producto.item.title} x {producto.quantity}</p>
                                    <p>${producto.item.price * producto.quantity}</p>
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

                }
            </div>
        </div>


    )
}

export default CheckOut
