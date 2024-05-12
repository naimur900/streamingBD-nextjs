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
      {/* overflow-x-auto my-16 md:p-24 md:m-10 */}
      <div className="container mx-auto overflow-x-auto px-[4%] my-[10%]">
        {cart.length > 0 ? (
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
