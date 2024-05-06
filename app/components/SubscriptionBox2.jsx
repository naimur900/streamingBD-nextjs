"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const subscriptionBoxVarint = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.7,
      delay: 0.2,
    },
  },
};

const SubscriptionBox2 = ({ img, id, headline, price, detail, endpoint }) => {
  return (
    <>
      <motion.div
        variants={subscriptionBoxVarint}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id={id}
        className="flex flex-col-reverse items-center m-5 w-fit sm:flex-row sm:justify-start md:m-12 lg:m-20 xl:m-32"
      >
        <div className="w-5/6 m-2 p-5 flex flex-col items-center sm:m-0 sm:w-1/2 2xl:p-16 relative -top-16 bg-slate-500 backdrop-blur-sm sm:z-10 bg-white/5 rounded-3xl sm:top-0 sm:left-16">
          <div>
            <h2 className="text-primary text-lg font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">
              {headline}
            </h2>
            <p className="text-white font-semibold sm:text-lg xl:text-xl">
              Starting from <span className="text-secondary">{price}</span> taka
            </p>
            <p className="xl:text-lg">{detail}</p>
          </div>
          <Link
            className="btn btn-primary font-bold my-7 w-1/2 xl:w-1/3 xl:text-lg"
            href={`/allSub/${endpoint}`}
          >
            <button>BUY NOW</button>
          </Link>
        </div>
        <figure className="object-cover overflow-hidden rounded-3xl w-full sm:m-5 sm:w-1/2 sm:relative sm:right-16 shadow-2xl">
          <Image src={img} width="700" height="700" alt="" />
        </figure>
      </motion.div>
    </>
  );
};

export default SubscriptionBox2;
