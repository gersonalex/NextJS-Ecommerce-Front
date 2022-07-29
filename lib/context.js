import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add data for state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  //Increase product quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{ qty, increaseQty, decreaseQty, showCart, setCartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);