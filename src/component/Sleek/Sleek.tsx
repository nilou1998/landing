import React from "react";
import photo from "@/assent/photo/image-1.jpg";
import Image from "next/image";

const Sleek = () => {
  return (
    <div className="w-full sm:w-auto flex flex-col px-6 lg:px-80 mx-auto bg-white font-Lahzeh">
      <h2 className="text-black font-semibold py-8 text-2xl">
        لورم ایپسوم متن ساختگی با تولید تولید تولید
      </h2>
      <button className="bg-white text-black border border-gray-300 py-2 px-4 w-1/2 rounded-full flex lg:w-fit">
        بریم بگردیم
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#e8eaed"
          className="mr-2"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>
      <Image src={photo} alt="slide 1" className="rounded-lg w-full py-8" />
    </div>
  );
};

export default Sleek;
