"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import photo from "@/assent/photo/image-1.jpg";
import Image from "next/image";
const CommunityPlatform = () => {
  return (
    <div className="w-full sm:w-auto flex flex-col mx-auto px-6 lg:px-80 py-12 bg-white font-Lahzeh">
      <h2 className="text-black font-semibold text-2xl lg:mx-auto lg:text-4xl lg:w-[35%] lg:text-center ">
        لورم ایپسوم متن ساختگی با تولید سادگی صنعت
      </h2>
      <div className="py-8">
        <button className="bg-white text-black border border-gray-300 py-2 px-4 w-1/2 rounded-full flex lg:w-fit lg:mx-auto">
          بریم بگردیم
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="black"
            className="mr-2"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
        <div className="flex py-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            className="w-full"
          >
            <SwiperSlide>
              <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CommunityPlatform;
