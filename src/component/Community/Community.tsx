"use client";
import React from "react";
import Background from "@/assent/photo/background.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import photo from "@/assent/photo/image-1.jpg";
import Image from "next/image";

const Community = () => {
  return (
    <div className="w-full sm:w-auto flex flex-col lg:px-0 mx-auto lg:w-full font-Lahzeh">
      <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundRepeat: "no-repeat",
        }}
        className="w-full bg-custom-image bg-cover bg-center lg:px-60 lg:py-32"
      >
        <h2 className="font-semibold text-xl text-black py-8 px-6 lg:flex lg:justify-center lg:items-center lg:w-[25%] lg:text-center lg:mx-auto">
          لورم ایپسوم متن ساختگی با تولید سادگی صنعت
        </h2>
        <p className="text-black/85 font-semibold text-[14px] px-6 lg:flex lg:justify-center lg:items-center lg:w-[45%] lg:text-center lg:mx-auto">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه در ازم است
        </p>
        <div className="flex px-6 py-8">
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

export default Community;
