// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useCart } from "../context/cartContext";

// const subscriptionBoxVarint = {
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
//       duration: 0.6,
//       delay: 0.2,
//     },
//   },
// };

// // { img, name, id, details, monthPriceDict, isVpn }

// const DetailsDemo = () => {
//   const img = "/images/allSVG/hotstar.svg";
//   const name = "Netflix-2Month";
//   const monthPriceDict = {
//     1: ["250"],
//     2: ["599"],
//     3: ["899"],
//     6: ["1799"],
//     12: ["3499"],
//   };

//   const id = "NF12";
//   const details = `Shared Profile
//                       4K Ultra HD
//                       Multiple Device’s Login [ Tv/Laptop/Mobile ]
//                       28 -30 Days Instant Replace Warranty
//                       Account Renew Available For Lifetime
//                       Shared Profile এ Profile Name এবং Pin পরিবর্তন করতে পারবেন না।
//                       সম্পুর্ন অফিসিয়াল একাউন্ট হওয়ায় কোনো রকমের ঝামেলা ছাড়া পরিবার এর সাথে উপভোগ করুন Netflix এর হাজার ও কন্টেন্ট 4K UHD তে।;`;
//   const isVpn = true;

//   const [finalPrice, setFinalPrice] = useState("Choose Your Plan");
//   const [showAlert, setShowAlert] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [isVpnButtonSelect, setIsVpnButtonSelect] = useState("");

//   useEffect(() => {
//     console.log(finalPrice);
//     console.log(typeof finalPrice);
//   }, [finalPrice]);

//   const value = useCart();
//   const { cartDispatch } = value;

//   const handleMonth = (month) => {
//     setIsVpnButtonSelect("");
//     setSelectedMonth(parseInt(month));
//   };

//   const handleVpn = (flag) => {
//     if (selectedMonth == "") {
//       setIsVpnButtonSelect("");
//     } else {
//       if (flag) {
//         if (monthPriceDict[selectedMonth][1] == undefined) {
//           setFinalPrice("You can not have VPN with this package");
//           setIsVpnButtonSelect("");
//         } else {
//           setFinalPrice(parseInt(monthPriceDict[selectedMonth][1]));
//           setIsVpnButtonSelect("VPN");
//         }
//       } else {
//         setFinalPrice(parseInt(monthPriceDict[selectedMonth][0]));
//         setIsVpnButtonSelect("NO-VPN");
//       }
//     }
//   };

//   const handleAddToCart = () => {
//     const month = selectedMonth;
//     cartDispatch({
//       type: "ADD-TO-CART",
//       payload: { id, name, month, finalPrice },
//     });

//     setShowAlert(true);

//     // Hide the alert after 3 seconds (adjust timeout as needed)
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 2000);
//   };

//   return (
//     <>
//       <motion.div
//         variants={subscriptionBoxVarint}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="flex flex-col justify-center items-center sm:flex-row mx-7 my-16 sm:gap-3 md:gap-6 lg:gap-8 md:mx-0 lg:mx-16 lg:px-10 xl:mx-24 xl:px-14"
//       >
//         <figure className="w-3/4 sm:w-1/2 sm:relative sm:left-8 md:relative md:left-16">
//           <Image className="" src={img} height={"40"} width={"400"} alt="" />
//         </figure>

//         <div className="flex flex-col sm:w-1/2 justify-center relative -top-20 bg-slate-500 backdrop-blur-sm bg-white/5 p-7 rounded-3xl z-1 sm:top-0 sm:-left-8 md:top-0 md:-left-16">
//           <div className="flex flex-col sm:flex-row gap-3 justify-between my-3">
//             <div className="md:w-3/6 font-bold text-primary md:py-7">
//               <div className="text-white text-xl drop-shadow-2xl md:text-3xl">
//                 {name}
//               </div>
//               {Number.isInteger(finalPrice) ? (
//                 <div className="text-xl md:mt-6">
//                   Price:{" "}
//                   <span className="text-secondary font-extrabold">
//                     {finalPrice}
//                   </span>{" "}
//                   Taka
//                 </div>
//               ) : (
//                 <div className="md:text-lg text-secondary md:mt-6">
//                   {finalPrice}
//                 </div>
//               )}
//             </div>
//             <div className="md:w-3/6 flex flex-col md:items-end md:text-center">
//               <div>
//                 <p className="text-xs">Select months</p>
//                 <div className="flex gap-2 py-3">
//                   {Object.entries(monthPriceDict).map(([month, price]) => (
//                     <button
//                       key={month}
//                       className={`btn text-xs ${
//                         selectedMonth === parseInt(month)
//                           ? "btn-primary"
//                           : "btn-outline"
//                       }`}
//                       onClick={() => handleMonth(month)}
//                     >
//                       {month}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {isVpn ? (
//                 <div>
//                   <p className="text-xs">Select to Choose VPN</p>
//                   <div className="flex gap-2 py-3">
//                     <button
//                       //   key={"VPN"}
//                       className={`btn text-xs ${
//                         isVpnButtonSelect === "VPN"
//                           ? "btn-primary"
//                           : "btn-outline"
//                       }`}
//                       onClick={() => {
//                         handleVpn(true);
//                       }}
//                     >
//                       VPN
//                     </button>
//                     <button
//                       //   key={"NO-VPN"}
//                       className={`btn text-xs ${
//                         isVpnButtonSelect === "NO-VPN"
//                           ? "btn-primary"
//                           : "btn-outline"
//                       }`}
//                       onClick={() => {
//                         handleVpn(false);
//                       }}
//                     >
//                       No-VPN
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div></div>
//               )}
//             </div>
//           </div>

//           <hr />
//           <div className="my-3 lg:text-base">
//             <ul className="text-white list-disc px-6">
//               {details.split("\n").map((detail, index) => (
//                 <li key={index}>{detail.trim()}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex justify-between items-center my-3 gap-4">
//             <a
//               target="_blank"
//               aria-label="Chat on WhatsApp"
//               href="https://wa.me/+8801521566835"
//             >
//               <Image
//                 alt="Chat on WhatsApp"
//                 width={"190"}
//                 height={"190"}
//                 src="../images/WhatsAppButtonGreenMedium.svg"
//               />
//             </a>

//             <button
//               className="btn btn-primary p-2 font-bold text-xs md:p-3"
//               onClick={handleAddToCart}
//             >
//               ADD TO CART
//             </button>
//           </div>
//           <div>
//             <button className="btn btn-info w-full my-3">
//               Delivery time: 10 min to 6 hrs
//             </button>
//           </div>

//           {showAlert && (
//             <div role="alert" className="flex alert alert-success md:w-56">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="stroke-current shrink-0 h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <span>Added to cart!</span>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default DetailsDemo;
