"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import Cart from "./Cart";

const CartPage = () => {
  const value = useCart();
  //   console.log(value);
  const { cart, cartDispatch } = value;
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  //   console.log(cart);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cart.forEach((item) => {
      calculatedTotalPrice += parseInt(item.finalPrice);
    });

    setTotalItem(cart.length);
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="container flex flex-col gap-14 h-svh mx-auto overflow-x-auto my-[12%] px-[4%]">
            <h1 className="text-center font-extrabold text-2xl">Cart</h1>
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
                {cart.map((item) => {
                  return (
                    <Cart
                      key={item.id}
                      item={item}
                      cart={cart}
                      cartDispatch={cartDispatch}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-between items-center font-extrabold px-[8%] mb-[16%]">
              <div className="w-3/4 md:text-lg">
                <h3>Total: {totalPrice}</h3>
                <h3>Total Item: {totalItem}</h3>
              </div>
              <Link href={{ pathname: "/checkout", query: { totalPrice } }}>
                <button className="btn btn-warning font-bold">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center h-screen">Your cart is empty</h1>
      )}
    </>
  );
};

export default CartPage;
