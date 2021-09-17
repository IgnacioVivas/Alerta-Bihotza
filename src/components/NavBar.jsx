import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header>
                <div className="HeaderTop">
                    <div className="Izquierda">                       
                        <span>OFRECEMOS ENVIO GRATIS A TODO EL MUNDO</span>
                    </div>
                    <div className="Derecha">
                        <a href="">INSTAGRAM</a>
                        <a href="">FACEBOOK</a>
                        <a href="">TWITTER</a>
                    </div>
                </div>
                <div className="HeaderBottom">
                    <div className="HeaderIzquierda">
                        <Link to={`/`}>
                            <p>ALERTA BIHOTZA</p>
                        </Link>
                    </div>
                    <nav className="NavBar">
                        <ul>
                            <li><a href="">inicio</a></li>
                            <li><Link to={`categoria/hombre`}>hombre</Link></li>
                            <li><Link to={`categoria/mujer`}>mujer</Link></li>
                            <li><a href="">contacto</a></li>
                        </ul>
                    </nav>
                    <div className="HeaderDerecha">
                        <CartWidget></CartWidget>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            
        </header>
    )
}

export default NavBar
