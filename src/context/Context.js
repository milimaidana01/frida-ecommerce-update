import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {

  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const onShowMoreButtonClick = () => {
    setShowMoreProducts(!showMoreProducts);
    setShowMoreButton(!showMoreButton);
  };
 
  const value = {
    showMoreProducts,
    setShowMoreProducts,
    onShowMoreButtonClick,
    showMoreButton,
    setShowMoreButton
  };
  
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default {
  Provider,
  Consumer: Context.Consumer,
};
