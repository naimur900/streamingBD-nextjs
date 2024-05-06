"use client";
import { useEffect } from "react";
const Cart = ({ productCart, cartState, cartDispatch }) => {
  const pId = productCart.id;

  useEffect(() => {
    console.log(cartState.cart);
  }, [cartState.cart]);

  return (
    <>
      <tr className="text-center md:text-lg">
        <td>{productCart.id}</td>
        <td>{productCart.name}</td>
        {/* <td>{productCart.pric}</td> */}
        <td>{productCart.month}</td>
        <td>{productCart.finalPrice}</td>
        <td>
          <button
            className="btn btn-accent"
            onClick={(productCart) => {
              cartDispatch({
                type: "REMOVE-FROM-CART",
                payload: { pId },
              });
            }}
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cart;
