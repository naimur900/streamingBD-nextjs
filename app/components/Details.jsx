"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

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
      duration: 0.6,
      delay: 0.2,
    },
  },
};

const Details = ({ img, price, name, id, details, secondScreenOption }) => {
  const [finalPrice, setFinalPrice] = useState(price.split("-")[0]);
  const [isPriceOne, setIsPriceOne] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const isSecondScreenOption = secondScreenOption;

  useEffect(() => {
    // This useEffect will run whenever cartState changes
    console.log(isPriceOne, finalPrice);
  }, [isPriceOne, finalPrice]);

  const value = useCart();
  const { cartDispatch } = value;

  const handleChange = (sc) => {
    if (sc == "2" && finalPrice === price.split("-")[0]) {
      setFinalPrice(price.split("-")[1]);
      setIsPriceOne(!isPriceOne);
    } else if (sc == "1" && finalPrice === price.split("-")[1]) {
      setFinalPrice(price.split("-")[0]);
      setIsPriceOne(!isPriceOne);
    } else {
      setFinalPrice(finalPrice);
    }
  };

  const handleAddToCart = () => {
    const month = name.match(/\d+/);
    cartDispatch({
      type: "ADD-TO-CART",
      payload: { id, name, month, finalPrice },
    });

    // Show the alert
    setShowAlert(true);

    // Hide the alert after 3 seconds (adjust timeout as needed)
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        variants={subscriptionBoxVarint}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center w-fit m-7 my-12 md:flex-row md:my-40 lg:px-16 xl:px-28"
      >
        <figure className="object-cover overflow-hidden rounded-3xl w-full z-0 md:relative md:left-16 shadow-2xl">
          <Image src={img} height={"700"} width={"700"} alt="" />
        </figure>
        <div className="flex flex-col justify-center relative -top-16 bg-slate-500 backdrop-blur-sm bg-white/5 p-7 rounded-3xl z-1 sm:w-3/4 md:top-0 md:right-16">
          <div className="flex gap-2 items-center justify-between my-3">
            <div className="w-3/4 md:text-xl font-bold text-primary">
              <div>{name}</div>

              <div className={`${isPriceOne ? "" : "hidden"}`}>
                {price.split("-")[0]} tk
              </div>
              <div className={`${isPriceOne ? "hidden" : ""}`}>
                {price.split("-")[1]} tk
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p
                className={`block text-xs ${
                  isSecondScreenOption ? "" : "hidden"
                }`}
              >
                Screen
              </p>
              <div className="flex flex-row gap-3 my-3">
                <button
                  className={`btn btn-accent  ${
                    isPriceOne ? "" : "btn-outline"
                  } ${isSecondScreenOption ? "" : "hidden"}`}
                  onClick={() => handleChange("1")}
                >
                  1
                </button>
                <button
                  className={`btn btn-accent ${
                    isPriceOne ? "btn-outline" : ""
                  } ${isSecondScreenOption ? "" : "hidden"}`}
                  onClick={() => handleChange("2")}
                >
                  2
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="my-3 lg:text-base">
            <ul className="text-white list-disc px-6">
              {details.split("\n").map((detail, index) => (
                <li key={index}>{detail.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center my-3 gap-4">
            <a
              target="_blank"
              aria-label="Chat on WhatsApp"
              href="https://wa.me/+8801521566835"
            >
              <Image
                alt="Chat on WhatsApp"
                width={"190"}
                height={"190"}
                src="../images/WhatsAppButtonGreenMedium.svg"
              />
            </a>

            <button
              className="btn btn-primary p-2 font-bold text-xs md:p-3"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
          <div>
            <button className="btn btn-info w-full my-3">
              Delivery time: 10 min to 6 hrs
            </button>
          </div>

          {showAlert && (
            <div role="alert" className="flex alert alert-success md:w-56">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Added to cart!</span>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Details;

{
  /* <select
              className="select select-bordered w-1/4 select-sm max-w-xs"
              onChange={handleChange}
            >
              <option disabled value="">
                Month
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select> */
}

// const handleChange = (sc) => {
//   if (sc == "2" && finalPrice === price.split("-")[0]) {
//     if (price.split("-")[1] == undefined) {
//       setFinalPrice("-");
//     } else {
//       setFinalPrice(price.split("-")[1]);
//       setIsPriceOne(!isPriceOne);
//       setScreenCont(2);
//     }
//   } else if (sc == "1" && finalPrice === price.split("-")[1]) {
//     setFinalPrice(price.split("-")[0]);
//     setIsPriceOne(!isPriceOne);
//     setScreenCont(1);
//   } else {
//     setFinalPrice(finalPrice);
//   }
// };
