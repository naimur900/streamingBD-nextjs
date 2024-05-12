"use client";
import { useEffect, useReducer } from "react";
import { CartContext } from "./cartContext";

const cartReducer = (cartState, action) => {
  // console.log(cartState);

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

    case "REMOVE-ALL": {
      return {
        ...cartState,
        cart: [],
      };
    }

    default:
      return cartState;
  }
};

const CartContextProvider = ({ children }) => {
  const intialState = { cart: [] };
  const [cartState, cartDispatch] = useReducer(cartReducer, intialState);

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
    window.localStorage.setItem("cart", JSON.stringify(cartState.cart));
    // console.log(cartState);
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
