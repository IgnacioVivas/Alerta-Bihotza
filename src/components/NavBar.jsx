import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartWidget from "./CartWidget";
import { useState } from "react";

function NavBar() {
  const { iconCart } = useCartContext();

  const [click, setClick] = useState(false);

  const openMenu = () => {
    if (click === true) {
      document.getElementById("navBar").style.left = "-1000px";
    } else {
      document.getElementById("navBar").style.left = "0px";
    }
    setClick(!click);
  };

  return (
    <header>
      <div className="header-top">
        <div>
          <div className="cont-propaganda">
            <span>WE OFFER FREE SHIPPING WORLDWIDE</span>
          </div>
          <div className="cont-sociales">
            <span>FACEBOOK</span>
            <span>INSTAGRAM</span>
            <span>TWITTER</span>
            <span>PINTEREST</span>
          </div>
        </div>
      </div>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="icon-logo">
            <Link to={`/Alerta-Bihotza`}>
              <span>ALERTA BIHOTZA</span>
            </Link>
          </div>
          <div className="icon-hamburguesa">
            {click ? (
              <i class="ri-close-line" onClick={openMenu}></i>
            ) : (
              <i className="ri-menu-5-fill" onClick={openMenu}></i>
            )}
          </div>
          <nav id="navBar">
            <ul>
              <li>
                <Link to={`/Alerta-Bihotza`}>home</Link>
              </li>
              <li>
                <Link to={`/categoria/hombre`}>man</Link>
              </li>
              <li>
                <Link to={`/categoria/mujer`}>woman</Link>
              </li>
              <li>
                <Link to="">contact</Link>
              </li>
              <li className="search-cart">
                <Link to={`/cart`}>
                  <CartWidget></CartWidget>
                  <span>{iconCart()}</span>
                </Link>
                <i className="ri-search-line"></i>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
