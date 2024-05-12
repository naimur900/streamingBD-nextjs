"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useCart } from "../context/cartContext";

const bkashQRVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.1,
    },
  },
};

const Form = ({ totalPrice }) => {
  const { cart } = useCart();
  // console.log(cart);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "+880-",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data, price: totalPrice });
    fetch("http://localhost:3030/payment/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, price: totalPrice, cart: cart }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.replace(result.GatewayPageURL);
      });
  };

  // console.log(watch("email"));
  // console.log(watch("senderName"));
  // console.log(watch("phoneNumber"));
  // console.log(watch("reference"));

  return (
    <div className="flex flex-col items-center md:w-1/2 lg:w-2/3">
      <div className="font-semibold my-5 flex flex-col gap-4">
        <div className="text-center">
          <h1>
            Total Price:{" "}
            <span className="font-extrabold text-primary">{totalPrice} tk</span>
          </h1>
          <h1>Kindly pay first and then fill up the form</h1>
        </div>
        <div>
          <a
            target="_blank"
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+8801521566835"
          >
            {" "}
            <Image
              className="mx-auto"
              src={"/images/WhatsAppButtonGreenSmall.svg"}
              height="170"
              width="170"
            />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 w-full items-center">
          <div>
            <h1>Name</h1>
            <input
              className="btn btn-outline"
              {...register("senderName", { required: true, maxLength: 50 })}
            />
          </div>
          <div>
            <h1>Email</h1>
            <input
              className="btn btn-outline"
              {...register("email", {
                required: true,
                pattern:
                  /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/,
              })}
            />
          </div>
          <div>
            <h1>Phone Number</h1>
            <input
              className="btn btn-outline"
              {...register("phoneNumber", {
                required: true,
                valueAsNumber: true,
                maxLength: 11,
              })}
            />
          </div>
          <div>
            <h1>Reference</h1>
            <input
              className="btn btn-outline"
              {...register("reference", { maxLength: 50 })}
            />
          </div>
          {errors.exampleRequired && (
            <span className="text-white">This field is required</span>
          )}

          <input className="btn btn-primary w-20" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
