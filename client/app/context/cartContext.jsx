"use client";
import { createContext, useContext } from "react";

const CartContext = createContext(null);

const useCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("Must be used within a cartProvider");
  }
  return context;
};

export { CartContext, useCart };
