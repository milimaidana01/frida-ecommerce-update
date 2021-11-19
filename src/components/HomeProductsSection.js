import React, { useContext } from "react";
import "../styles/HomeProductsSection.css"
import { homeProducts, homeShowMoreProducts } from "../maps/ProductsList";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShowMoreButton from "./ShowMoreButton";
import { Context } from "../context/Context";

const HomeProductsSection = () => {
  const { showMoreProducts } = useContext(Context);

  return (
    <>
      <div className="home-tittle">PRODUCTOS DESTACADOS</div>
      <div className="products-container">
        {homeProducts.map((product, index) => {
            return (
                <div className="product-card" key={index}>
                    <div className="product-container">
                        <img className="product-img" src={product.img} />
                        <div className="text-container">
                          <div className="product-name">{product.name}</div>
                          <div className="product-price">{product.price}</div>
                        </div>
                        <div className="add-button">
                          <AddShoppingCartIcon/> 
                        </div>
                    </div>
                </div>
            );
        })}
      {showMoreProducts ? (<>
             {homeShowMoreProducts.map((product, index) => {
                 return (
                  <div className="product-card" key={index}>
                    <div className="product-container">
                      <img className="product-img" src={product.img} />
                      <div className="text-container">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price}</div>
                    </div>
                      <div className="add-button">
                        <AddShoppingCartIcon/> 
                      </div>
                    </div>
                  </div>
             );
       })}
      </>
      ) : "" }
      </div>
      <ShowMoreButton/> 
    </>
  );
};

export default HomeProductsSection;