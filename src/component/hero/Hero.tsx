"use client";
import React, { useState, useEffect } from "react";
import photo from "@/assent/photo/image-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [active, setActive] = useState("محصول");
  useEffect(() => {
    setIsClient(true);
  }, []);
  const [selectedTab, setSelectedTab] = useState(1);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-white w-full font-Lahzeh">
      <div className="w-full sm:w-auto mx-auto px-6 lg:px-80 bg-white relative">
        {menuOpen && <div className="fixed"></div>}
        {/* NAVBAR */}
        <div className="py-4 bg-white flex items-center justify-between">
          {/* LOGO */}
          <div className="bg-blue-400 w-fit text-black">
            <span>لوگولوگولوگولوگولوگو</span>
          </div>

          {/* MENU - Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z" />
              </svg>
            </button>
          </div>

          {/* MENU - Desktop */}
          <div className="hidden lg:flex space-x-6 text-black">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              محصول
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              قالب ها{" "}
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              ویترین{" "}
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              کار{" "}
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              قیمت{" "}
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
              رزرو{" "}
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-black w-full backdrop-blur-sm bg-opacity-50 text-white space-y-4 py-4 z-20`}
        >
          <div className="container w-[90%] mx-auto">
            <div className="w-[90%] mx-auto px-6 py-2 bg-black rounded-full text-white text-center mb-4">
              <button className="w-full">شروع رایگان</button>
            </div>
            <div className="w-[90%] mx-auto px-6 py-2 bg-white text-black rounded-full text-center mb-4">
              <button className="w-full">ورود</button>
            </div>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              محصول
            </a>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              قالب ها
            </a>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              ویترین
            </a>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              کار
            </a>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              قیمت
            </a>
            <a href="#" className="block px-6 py-2 hover:bg-gray-700 rounded">
              رزرو
            </a>
          </div>
        </div>
        {/* END MOBILE MENU */}
      </div>
      <hr className="border-t-2 border-gray-300 w-full" />
      <div className="w-full sm:w-auto mx-auto px-6 lg:px-80 bg-white lg:justify-center lg:items-center lg:flex lg:flex-col lg:text-center">
        <div className="flex lg:justify-center">
          <button className="mt-6 bg-white py-2 px-6 text-black rounded-full flex items-center border border-gray-300 lg:mt-24">
            <div className="h-2 w-2 rounded-full bg-green-600 ml-2"></div>
            <span> نمایش زنده وبینار</span>
            <span className="hidden lg:inline-block ml-4 text-gray-600 mr-1">
              | به ما پیوندید
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="gray"
              className="mr-2"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
        </div>
        <h2 className="text-black font-semibold text-2xl w-full mt-8 mb-4 leading-10 lg:w-1/2">
          قدرت هوش مصنوعی را برای کسب‌وکارتان آزاد کنید
        </h2>
        <span className="text-black text-base lg:w-1/3 font-normal">
          با پلتفرم اتوماسیون هوشمند دلاورس، تعاملات با مشتریان را متحول کنید،
          عملیات‌تان را بهینه سازید و به رشدتان سرعت ببخشید.
        </span>
        <div className="flex gap-4 py-6">
          <button className="bg-black text-white py-2 px-4 rounded-full flex">
            تماشای دمو
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
          <button className="bg-white text-black py-2 px-6 border border-gray-300 rounded-full flex">
            درخواست دمو{" "}
          </button>
        </div>
        {/* <div className="hidden lg:flex space-x-16 font-semibold text-lg text-gray-600 pr-0">
          {["محصول", "قالب ها", "ویترین", "کار", "قیمت", "رزرو"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActive(item)}
              className={`px-6 py-2 rounded-full transition-all ${
                active === item
                  ? "bg-white text-black shadow-md"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {item}
            </a>
          ))}
        </div> */}
        <div className="lg:flex tabs tabs-bordered bg-white lg:gap-4 lg:justify-between lg:w-full lg:px-32 lg:text-black py-4 hidden">
          <button
            onClick={() => setSelectedTab(1)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 1 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 1
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 2 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 2
          </button>
          <button
            onClick={() => setSelectedTab(3)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 3 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 3
          </button>
          <button
            onClick={() => setSelectedTab(4)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 4 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 4
          </button>
          <button
            onClick={() => setSelectedTab(5)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 5 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 5
          </button>
          <button
            onClick={() => setSelectedTab(6)}
            className={`focus:bg-gray-300 w-fit h-fit px-4 py-2 rounded-full tab text-black ${
              selectedTab === 6 ? "tab-active bg-gray-300" : ""
            }`}
          >
            لورم 6
          </button>
        </div>
        <div className="mt-6">
          {selectedTab === 1 && (
             <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
          {selectedTab === 2 && (
            <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
          {selectedTab === 3 && (
             <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
          {selectedTab === 4 && (
            <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
          {selectedTab === 5 && (
          <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
          {selectedTab === 6 && (
       
            <Image src={photo} alt="slide 1" className="rounded-lg w-full" />
          )}
        </div>
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
        <div className="hidden lg:block mt-6 lg:w-f">
          {/* <Image src={photo} alt="slide 1" className="rounded-lg w-full" /> */}
        </div>
        <p className="py-4 text-gray-600 text-center px-8 flex mx-auto justify-center items-center ">
          لورم ایپسوم متن ساختگی با تولی از صنعت چ چاپ و با است چاپ و با
          استفادهده
        </p>
      </div>
    </div>
  );
};

export default Hero;
