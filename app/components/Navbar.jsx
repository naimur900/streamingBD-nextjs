"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

const dropDownVarint = {
  hidden: {
    opacity: 0,
    scale: 0.3,
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

const Navbar = () => {
  const value = useCart();
  const { cartState } = value;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsDropdownOpen(!isDropdownOpen);
    // console.log("Clicked", e);
  };

  useEffect(() => {
    console.log(isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start " onClick={(e) => toggleDropdown(e)}>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden text-primary"
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
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-neutral rounded-box w-52 border-2 border-solid`}
          >
            <motion.li variants={dropDownOptionVariant}>
              <Link onClick={(e) => toggleDropdown(e)} href="/">
                Home
              </Link>
            </motion.li>
            <motion.li variants={dropDownOptionVariant}>
              <a>Subscriptions</a>
              <ul className="p-2">
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#netflix">Netflix</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#amazon">Amazon Prime</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#ytmusic">Youtube Music</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#spotify">Spotify</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#hbomax">HBO Max</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#disneyplus">Disney Plus</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#chatgpt">Chat GPT+</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#quillbot">Quillbot Premium</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#vpn">VPN</Link>
                </li>
                <li onClick={(e) => toggleDropdown(e)}>
                  <Link href="/#combo">Combo</Link>
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
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li>
            <Link href="/#netflix">
              <Image
                src="/images/netflixIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#amazon">
              <Image
                src="/images/primeVideoIcon.svg"
                height={"35"}
                width={"35"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#ytmusic">
              <Image
                src="/images/youtubeIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#spotify">
              <Image
                src="/images/spotifyIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#hbomax">
              <Image
                src="/images/hboMaxIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#disneyplus">
              <Image
                src="/images/disneyPlusIcon.svg"
                height={"35"}
                width={"35"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#chatgpt">
              <Image
                src="/images/chatgptIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#quillbot">
              <Image
                src="/images/quillbotIcon.webp"
                height={"30"}
                width={"30"}
                alt=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#vpn">
              <Image
                src="/images/vpnIcon.svg"
                height={"30"}
                width={"30"}
                alt=""
                srcset=""
              />
            </Link>
          </li>
          <li onClick={toggleDropdown}>
            <Link href="/#combo">
              <Image
                src="/images/comboIcon.svg"
                height={"40"}
                width={"40"}
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
        {cartState.cart.length > 0 ? (
          <Link href="/cart" className="btn">
            CART
            <div className="badge badge-secondary">{cartState.cart.length}</div>
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

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useCart } from "../context/cartContext";

// const dropDownVarint = {
//   hidden: {
//     opacity: 0,
//     scale: 0.3,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.7,
//       delay: 0.2,
//     },
//   },
// };

// const Navbar = () => {
//   const value = useCart();
//   const { cartState } = value;
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     console.log(isDropdownOpen);
//   }, [isDropdownOpen]);

//   return (
//     <div className="navbar bg-neutral z-50">
//       <div className="navbar-start ">
//         <div className="dropdown z-50">
//           <div tabIndex={0} role="button" className="lg:hidden text-primary">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 onClick={toggleDropdown}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 />
//               </svg>
//             </div>
//           </div>
//           <motion.ul
//             initial="hidden"
//             whileTap="visible"
//             tabIndex={0}
//             className={`${
//               isDropdownOpen ? "" : "hidden"
//             } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52 border-2 border-dashed border-primary`}
//           >
//             <li>
//               <Link onClick={toggleDropdown} href="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <a>Subscriptions</a>
//               <ul className="p-2">
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#netflix">Netflix</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#amazon">Amazon Prime</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#ytmusic">Youtube Music</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#spotify">Spotify</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#hbomax">HBO Max</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#disneyplus">Disney Plus</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#chatgpt">Chat GPT+</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#quillbot">Quillbot Premium</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#vpn">VPN</Link>
//                 </li>
//                 <li onClick={toggleDropdown}>
//                   <Link href="/#combo">Combo</Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link href="/#footer">Contact</Link>
//             </li>
//           </motion.ul>
//         </div>
//         <Link href={"/"} className="btn btn-ghost text-xl text-white">
//           StreamingBD
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
// <ul className="menu menu-horizontal flex items-center">
//   {/* <li>
//     <Link href="/">Home</Link>
//   </li> */}
//   <li onClick={toggleDropdown}>
//     <Link href="/#netflix">
//       <Image
//         src="/images/netflixIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#amazon">
//       <Image
//         src="/images/primeVideoIcon.svg"
//         height={"35"}
//         width={"35"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#ytmusic">
//       <Image
//         src="/images/youtubeIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#spotify">
//       <Image
//         src="/images/spotifyIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#hbomax">
//       <Image
//         src="/images/hboMaxIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#disneyplus">
//       <Image
//         src="/images/disneyPlusIcon.svg"
//         height={"35"}
//         width={"35"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#chatgpt">
//       <Image
//         src="/images/chatgptIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#quillbot">
//       <Image
//         src="/images/quillbotIcon.webp"
//         height={"30"}
//         width={"30"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#vpn">
//       <Image
//         src="/images/vpnIcon.svg"
//         height={"30"}
//         width={"30"}
//         alt=""
//         srcset=""
//       />
//     </Link>
//   </li>
//   <li onClick={toggleDropdown}>
//     <Link href="/#combo">
//       <Image
//         src="/images/comboIcon.svg"
//         height={"40"}
//         width={"40"}
//         alt=""
//       />
//     </Link>
//   </li>
//   <li className="font-semibold">
//     <Link href="/#footer">Contact</Link>
//   </li>
// </ul>
//       </div>
//       <div className="navbar-end">
//         {cartState.cart.length > 0 ? (
//           <Link href="/cart" className="btn">
//             CART
//             <div className="badge badge-secondary">{cartState.cart.length}</div>
//           </Link>
//         ) : (
//           <Link href="/cart" className="btn">
//             CART
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
