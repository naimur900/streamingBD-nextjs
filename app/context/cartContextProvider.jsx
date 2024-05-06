"use client";
import { useReducer } from "react";
import { CartContext } from "./cartContext";

const cartReducer = (cartState, action) => {
  console.log(cartState);

  switch (action.type) {
    case "ADD-TO-CART":
      const existingProductIndex = cartState.cart.findIndex(
        (productCart) => productCart.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        // If the product is not already in the cart, add it
        return {
          ...cartState,
          cart: [...cartState.cart, action.payload],
        };
      } else {
        return cartState;
      }

    case "REMOVE-FROM-CART":
      return {
        ...cartState,
        cart: cartState.cart.filter(
          (productCart) => productCart.id !== action.payload.pId
        ),
      };

    default:
      return cartState;
  }
};

const intialState = { cart: [] };

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
