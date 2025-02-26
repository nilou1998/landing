"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const Integrate = () => {
  return (
    <div className="w-full sm:w-auto flex flex-col px-6 lg:px-80 mx-auto bg-white font-Lahzeh">
      <h2 className="text-black py-8 font-semibold text-2xl lg:flex lg:mx-auto">
      یکپارچه کنید. خودکار سازید. موفق شوید.
      </h2>

      <div className="overflow-hidden w-full bg-white py-6">
        <div className="w-full flex overflow-hidden relative">
          <motion.div
            className="flex gap-6 w-max"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index}`}
                className="w-32 h-32 rounded-lg shadow-md object-cover"
              />
            ))}
          </motion.div>
        </div>
        <span className="text-black py-4 text-center lg:mx-auto lg:justify-center flex">آماده تحول کسب‌وکارتان هستید؟ همین امروز با دلاورس شروع کنید.</span>
      </div>
    </div>
  );
};

export default Integrate;
