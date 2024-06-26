"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

const dropDownVarint = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: -60,
    y: -50,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      duration: 0.2,
      delay: 0.1,
    },
  },
};

const dropDownOptionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const cartVariant = {
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

const Navbar = () => {
  const value = useCart();
  const { cart } = value;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleDropdownOption = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log(isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <div className="navbar bg-neutral sticky top-0 z-50">
      <div className="navbar-start ">
        <div
          className="dropdown"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden text-primary hover:drop-shadow-2xl"
            // onClick={(e) => toggleDropdown(e)} // Add onClick event to toggle dropdown
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          </div>
          <motion.ul
            initial="hidden"
            animate={isDropdownOpen ? "visible" : "hidden"} // Update animate property based on dropdown state
            variants={dropDownVarint} // Update variants property
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-neutral rounded-box w-60 border-2 border-solid`}
          >
            <motion.li variants={dropDownOptionVariant}>
              <Link onClick={(e) => handleDropdownOption(e)} href="/">
                Home
              </Link>
            </motion.li>
            <motion.li variants={dropDownOptionVariant}>
              <a>Subscriptions</a>
              <ul className="p-2">
                <li onClick={(e) => handleDropdownOption(e)}>
                  <Link href="/#videoStreamingServices">
                    Video Streaming Services
                  </Link>
                </li>
                <li onClick={(e) => handleDropdownOption(e)}>
                  <Link href="/#musicStreamingServices">
                    Music Streaming Services
                  </Link>
                </li>
                <li onClick={(e) => handleDropdownOption(e)}>
                  <Link href="/#educationalServices">Educational Services</Link>
                </li>
                <li onClick={(e) => handleDropdownOption(e)}>
                  <Link href="/#vpnServices">VPN Services</Link>
                </li>
                <li onClick={(e) => handleDropdownOption(e)}>
                  <Link href="/#aiTools">AI Tools</Link>
                </li>
              </ul>
            </motion.li>
            <motion.li ariants={dropDownOptionVariant}>
              <Link href="/#footer">Contact</Link>
            </motion.li>
          </motion.ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl text-white">
          StreamingBD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center">
          <li>
            <Link href="/">
              <Image
                src="/images/allSVG/home.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#videoStreamingServices">
              <Image
                src="/images/allSVG/videostreamingservices.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#musicStreamingServices">
              <Image
                src="/images/allSVG/musicstreamingservices.svg"
                height={"35"}
                width={"35"}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#educationalServices">
              <Image
                src="/images/allSVG/educationalservices.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#vpnServices">
              <Image
                src="/images/allSVG/vpnservices.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link href="/#aiTools">
              <Image
                src="/images/allSVG/aitools.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li className="font-semibold">
            <Link href="/#footer">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {cart.length > 0 ? (
          <Link href="/cart" className="btn">
            CART
            <motion.div
              className="badge badge-secondary"
              variants={cartVariant}
              initial="hidden"
              animate="visible"
            >
              {cart.length}
            </motion.div>
          </Link>
        ) : (
          <Link href="/cart" className="btn">
            CART
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
