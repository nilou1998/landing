"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import photo from "@/assent/photo/image-1.jpg";
import Image from "next/image";

const Power = () => {
  return (
    <div className="w-full sm:w-auto flex flex-col mx-auto px-6 lg:px-80 py-12 bg-white font-Lahzeh">
      <h2 className="text-black font-semibold text-2xl lg:flex lg:justify-center">
        یک پلتفرم، امکانات بی‌پایان
      </h2>
      <span className="text-gray-500 leading-7  text-base lg:w-full lg:px-48 lg:text-center font-normal py-8">
        دلاورس کسب‌وکارتان را با راهکاری قابل تنظیم و مبتنی بر هوش مصنوعی
        توانمند می‌کند که تجربه مشتریان را بهبود می‌بخشد، جریان‌های کاری را
        بهینه می‌کند و با جاه‌طلبی‌های شما رشد می‌کند—همه اینها با یکپارچگی آسان
        در عملیات شما.
      </span>
      <div className="lg:hidden">
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
  );
};

export default Power;
