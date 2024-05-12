"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const categoryBoxVarint = {
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
      delay: 0.1,
      bounce: 0.3,
    },
  },
};

const CategoryBox2 = ({ img, id, headline, price, detail, endpoint }) => {
  return (
    <>
      <motion.div
        variants={categoryBoxVarint}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id={id}
        className="container mx-auto flex flex-col-reverse items-center px-[6%] my-[10%] sm:flex-row sm:px-[0%] md:px-[0%] lg:px-[12%]"
      >
        <div className="w-5/6 m-2 p-5 flex flex-col items-center sm:m-0 sm:w-1/2 2xl:p-16 relative -top-16 bg-slate-500 backdrop-blur-sm sm:z-10 bg-white/5 rounded-3xl sm:top-0 sm:left-16">
          <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <h2 className="text-primary text-lg font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">
              {headline}
            </h2>
            <p className="text-white font-semibold sm:text-lg xl:text-xl">
              Starting from <span className="text-secondary">{price}</span> taka
            </p>
            <p className="xl:text-lg">{detail}</p>
          </div>
          <Link href={`/allSub/${endpoint}`}>
            <Button
              classes={"btn btn-primary font-bold my-7 xl:text-lg shadow"}
            >
              BUY NOW
            </Button>
          </Link>
        </div>
        <figure className="object-cover overflow-hidden rounded-3xl w-full sm:m-5 sm:w-1/2 sm:relative sm:right-16 shadow-2xl">
          <Image src={img} width="700" height="700" alt="" />
        </figure>
      </motion.div>
    </>
  );
};

export default CategoryBox2;
