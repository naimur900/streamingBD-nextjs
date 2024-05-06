"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import Cart from "./Cart";

const CartPage = () => {
  const value = useCart();
  //   console.log(value);
  const { cartState, cartDispatch } = value;
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  //   console.log(cartState);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cartState.cart.forEach((product) => {
      calculatedTotalPrice += parseInt(product.finalPrice);
    });

    setTotalItem(cartState.cart.length);
    setTotalPrice(calculatedTotalPrice);
  }, [cartState]);

  return (
    <>
      <div className="overflow-x-auto my-16 md:p-24 md:m-10">
        {cartState.cart.length > 0 ? (
          <>
            <table className="table">
              <thead>
                <tr className="text-center md:font-extrabold md:text-lg">
                  <th>ID</th>
                  <th>Subscription</th>
                  <th>Month</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartState.cart.map((productCart) => {
                  return (
                    <Cart
                      key={productCart.id}
                      productCart={productCart}
                      cartState={cartState}
                      cartDispatch={cartDispatch}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-center items-center my-16 gap-3 m-5 font-extrabold">
              <div className="w-3/4 md:text-lg">
                <h3>Total: {totalPrice}</h3>
                <h3>Total Item: {totalItem}</h3>
              </div>
              <Link href={{ pathname: "/checkout", query: { totalPrice } }}>
                <button className="btn btn-warning font-bold">Checkout</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center h-screen">Your cart is empty</h1>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
