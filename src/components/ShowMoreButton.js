import React, { useState, useContext } from "react";
import "../styles/ShowMoreButton.css"
import { Context } from "../context/Context";

const ShowMoreButton = () => {
  const { onShowMoreButtonClick, showMoreButton } = useContext(Context);

  return (
    <>
      {showMoreButton && 
         <div className="button-container hide-products-btn">
           <button className="btn-4" id="button" onClick={onShowMoreButtonClick}>
             <span>Mostrar más</span>
           </button>
         </div>
      } 
    </>
  );
};

export default ShowMoreButton;