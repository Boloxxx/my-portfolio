"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageProfile() {
  return (
    <div className="relative">
      {/** Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        className="w-[338px] h-[338px] xl:w-[606px] xl:h-[606px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <Image
            className="object-contain"
            src="/bryan-profile.png"
            alt="Profile pic"
            width={900}
            height={900}
          />
        </motion.div>
      </motion.div>

      {/**Circle */}
      <motion.svg
        className="w-[250px] xl:w-[500px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 520 580"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#DC2626"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 93 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}
