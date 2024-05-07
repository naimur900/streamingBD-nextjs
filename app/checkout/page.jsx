"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
  console.log(totalPrice);
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
          <div className="font-semibold my-5">
            <h1>
              Total Price: <span className="font-extrabold">{totalPrice}</span>
            </h1>
            <h1>Kindly pay first and then fill up the form</h1>
          </div>

          <form
            action="https://formsubmit.co/0acc9e3a5483bb07974ac6d78509caad"
            method="POST"
            target="_blank"
          >
            <div className="flex flex-col gap-3 w-full items-center">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
              <input
                type="hidden"
                name="_subject"
                value="New submission!"
              ></input>
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
              <input
                type="text"
                placeholder="Transaction ID"
                name="trxID"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
              <input
                type="text"
                placeholder="Reference"
                name="reference"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <input type="hidden" name="_template" value="table"></input>

              <button className="btn btn-primary" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
