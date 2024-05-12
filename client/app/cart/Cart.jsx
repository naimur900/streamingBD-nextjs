"use client";
import { useEffect } from "react";
const Cart = ({ item, cart, cartDispatch }) => {
  const itemId = item.id;

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <tr className="text-center md:text-lg">
        <td>{item.id}</td>
        <td>{item.name}</td>
        {/* <td>{item.price}</td> */}
        <td>{item.month}</td>
        <td>{item.finalPrice}</td>
        <td>
          <button
            className="btn btn-accent"
            onClick={(item) => {
              cartDispatch({
                type: "REMOVE-FROM-CART",
                payload: { itemId },
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
