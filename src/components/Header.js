import React from "react";
import "../styles/Header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

  return (
    <div className="header">
      <div className="header-img-container">
        <img className="main-logo" src="https://i.ibb.co/xHxRXMr/fcf00df4-f89e-49c9-9df8-7874c24ddec9.jpg" alt="Logo" />
      </div>
      <div className="header-items-container">
        <div className="header-items">Inicio</div>
        <div className="header-items">Productos</div>
        <a className="header-items">¿Cómo comprar?</a>
        <a className="header-items">Mayoristas</a>
        <a className="header-items">Contacto</a>
        <div className="header-items"><ShoppingCartIcon id="cart-icon"/></div>
      </div>
    </div>
  );
};

export default Header;