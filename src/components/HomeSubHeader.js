import React from "react";
import "../styles/SubHeader.css"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';

const HomeSubHeader = () => {

  return (
    <div className="subheader-container">
        <div className="subheader-text">
          <DeliveryDiningIcon id="subheader-icon"/>
          Envíos a todo el país
        </div>
        <div className="subheader-text">
          <PaymentIcon id="subheader-icon"/>
          Todos los medios de pago
        </div>
        <div className="subheader-text">
          <SecurityIcon id="subheader-icon"/>
          Comprá con seguridad
        </div>
    </div>
  );
};

export default HomeSubHeader;