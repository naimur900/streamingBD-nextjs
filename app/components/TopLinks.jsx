"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const topLinkVariant = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.1,
      duration: 0.8,
    },
  },
};

const TopLinks = ({ svgs, page }) => {
  return (
    <motion.div
      className="flex items-center justify-center gap-7"
      variants={topLinkVariant}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(svgs).map(([key, value]) => (
        <Link key={key} href={`${page}/#${key}`}>
          <Image
            className="w-9 sm:w-12 md:w-14 mt-14"
            src={value.img}
            width={50}
            height={50}
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default TopLinks;
