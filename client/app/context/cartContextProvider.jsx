"use client";
import { useEffect, useReducer } from "react";
import { CartContext } from "./cartContext";

const cartReducer = (cart, action) => {
  // console.log(cart);

  switch (action.type) {
    case "ADD-TO-CART":
      const existingProductIndex = cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        // If the product is not already in the cart, add it
        return [...cart, action.payload];
      } else {
        return cart;
      }

    case "REMOVE-FROM-CART":
      return cart.filter((item) => item.id !== action.payload.itemId);

    case "REMOVE-ALL": {
      return [];
    }

    default:
      return cart;
  }
};

const CartContextProvider = ({ children }) => {
  const intialState = [];
  const [cart, cartDispatch] = useReducer(cartReducer, intialState);

  useEffect(() => {
    let storedCart = localStorage.getItem("cart");
    storedCart = JSON.parse(storedCart);

    if (storedCart) {
      for (let i = 0; i < storedCart.length; i++) {
        cartDispatch({
          type: "ADD-TO-CART",
          payload: storedCart[i],
        });
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cartState);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
