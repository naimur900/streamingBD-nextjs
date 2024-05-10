"use client";
import { motion } from "framer-motion";
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

const page = ({ searchParams }) => {
  const totalPrice = searchParams.totalPrice;
  const value = useCart();
  const { cartDispatch } = value;
  console.log(totalPrice);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    cartDispatch({
      type: "REMOVE-ALL",
    });
    // console.log({ ...data, price: totalPrice });
    // fetch("/api/sslc", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...data, price: totalPrice }),
    // });
  };

  // console.log(watch("email"));
  // console.log(watch("senderName"));
  // console.log(watch("phoneNumber"));
  // console.log(watch("reference"));

  return (
    <>
      <div className="flex flex-col items-center m-10 text-center gap-10 md:m-20 md:flex-row md:gap-0">
        <div className="flex flex-col items-center md:w-1/2 lg:w-1/3">
          <h1 className="my-5 text-lg font-bold">CHECKOUT</h1>
          <motion.div
            className="object-cover w-3/4 overflow-hidden rounded-3xl md:p-0"
            variants={bkashQRVariant}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/bkash-min.jpg"
              height={"700"}
              width={"700"}
              alt=""
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center md:w-1/2 lg:w-2/3">
          <div className="font-semibold my-5 flex flex-col gap-4">
            <div>
              <h1>
                Total Price:{" "}
                <span className="font-extrabold text-primary">
                  {totalPrice} tk
                </span>
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
                  {...register("senderName", { required: true })}
                />
              </div>
              <div>
                <h1>Email</h1>
                <input
                  className="btn btn-outline"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <h1>Phone Number</h1>
                <input
                  className="btn btn-outline"
                  {...register("phoneNumber", { required: true })}
                />
              </div>
              <div>
                <h1>Reference</h1>
                <input className="btn btn-outline" {...register("reference")} />
              </div>
              {errors.exampleRequired && (
                <span className="text-white">This field is required</span>
              )}

              <input className="btn btn-primary w-20" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
