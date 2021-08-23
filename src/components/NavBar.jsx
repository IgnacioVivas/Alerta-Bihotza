import React from 'react'

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
                        <p>ALERTA BIHOTZA</p>
                    </div>
                    <nav className="NavBar">
                        <ul>
                            <li><a href="">inicio</a></li>
                            <li><a href="">colección</a></li>
                            <li><a href="">sobre nosotros</a></li>
                            <li><a href="">contacto</a></li>
                        </ul>
                    </nav>
                    <div className="HeaderDerecha">
                        <i className="fas fa-shopping-bag"></i>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            
        </header>
    )
}

export default NavBar
