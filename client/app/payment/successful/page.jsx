"use client";
import { useEffect } from "react";
import { useCart } from "../../context/cartContext";
import PaymentRes from "../PaymentRes";

const Page = () => {
  const { cartDispatch } = useCart();

  useEffect(() => {
    // Update the cart state to remove all items when the component mounts
    cartDispatch({
      type: "REMOVE-ALL",
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <PaymentRes
      response={"Payment has been successful"}
      color={"bg-lime-300"}
    />
  );
};

export default Page;
