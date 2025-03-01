"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Brands from "@/component/brands/Brands";
import { div } from "framer-motion/client";
import Image from "next/image";
import Card2 from "../Cards/Card2";
import CardBook from "./CardBook";

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

function Booked() {
  return (
    <div className="w-full font-Lahzeh">
      <div className="py-4 bg-white flex items-center justify-between px-8 lg:px-96">
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
      <div className="w-full border-l-2 border-r-2 bg-gradient-to-tr from-gray-300 to-gray-50 sm:w-auto flex flex-col mx-auto px-6 lg:px-80 py-12 font-Lahzeh border border-gray-300">
        <div className="border-l-2 border-r-2 border-t-2 py-8 border-gray-300 lg:border-none">
          <h2 className="text-black font-semibold text-xl flex justify-center lg:text-2xl">
            رزرو کردن دمو
          </h2>
          <p className="text-gray-500 px-16 text-center font-semibold py-4">
            رزرو کردن دمو رزرو کردن دمو رزرو کردن دمو
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 ">
          <div className="w-full lg:grid lg:grid-cols-2 bg-white sm:w-auto flex flex-col mx-auto px-6 py-12 gap-4 lg:w-full">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black ">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full py-2 max-w-xs border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-black">
                لورم لورم
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full max-w-xs border border-gray-300"
              />
            </div>
            <button className="bg-black lg:mr-40 lg:flex lg:justify-center lg:w-full text-white py-4 mt-4 rounded-full">
              رزرو دمو
            </button>
          </div>
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="mySwiper w-full relative"
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="py-14 bg-white lg:w-full lg:py-10 lg:flex lg:flex-col lg:border-r-2 lg:border-gray-200">
                  <h2 className="text-blue-500 font-semibold text-lg px-8">
                    لورم لورم
                  </h2>
                  <p className="text-black pt-8 pb-48 font-normal px-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                  <div className="flex flex-row">
                    <div className="bg-gray-300 w-12 h-12 flex items-end rounded-full mr-8"></div>
                    <div className="flex flex-col pb-14">
                      <span className="px-2 pt-1 text-black text-[13px]">
                        لورم لورم لورم
                      </span>
                      <span className="text-[12px] px-2 py-1 text-black">
                        لورم لورم لورم لورم
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-prev absolute bottom-4 left-6 bg-white border border-gray-300  p-2  cursor-pointer z-10 rounded-tl-lg rounded-bl-lg ">
              <svg
                style={{ transform: "rotate(180deg)" }}
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="gray"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
            <div className="custom-next absolute bottom-4 left-14 bg-white border border-gray-300 p-2 rounded-tr-lg rounded-br-lg cursor-pointer z-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="gray"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
          </Swiper>
        </div>
        <div className="bg-white h-96 inline md:hidden">
          <div className="w-1/2 mx-auto mt-9 mb-4">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="flex flex-row justify-center items-center mx-auto w-full">
            <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
              <Image
                src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
                width={150}
                height={150}
                alt="logo 1"
              />
            </div>
            <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
              <Image
                src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
                width={150}
                height={150}
                alt="logo 2"
              />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mx-auto w-full mb-8">
            <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
              <Image
                src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
                width={150}
                height={150}
                alt="logo 1"
              />
            </div>
            <div className="w-1/2 flex justify-center border border-gray-300 px-8 py-8">
              <Image
                src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
                width={150}
                height={150}
                alt="logo 2"
              />
            </div>
          </div>
          <div className="w-1/2 mx-auto mb-4">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
          </div>
        </div>
        <div className="hidden md:inline lg:flex w-full lg:mx-auto">
          <div className="lg:flex lg:justify-between w-full gap-24 bg-white mx-auto px-6 lg:px-20 py-8 border border-gray-300">
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
            <Image
              src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
              width={200}
              height={200}
              alt=""
            />
          </div>
        </div>
        <div className="flex bg-inherit border border-gray-300 pt-20 pb-12 flex-col w-full">
          <div className="px-6 text-black shadow-lg py-2 bg-white flex mx-auto rounded-full">
            لورم لورم{" "}
          </div>
          <h3 className="flex mx-auto  py-8  text-black text-lg lg:text-2xl font-semibold w-full px-4 lg:w-1/3 text-center leading-loose">
            رزرو کردن دمو رزرو کردن دمو رزرو کردن دمو رزرو کردن دمو رزرو کردن
            دمو
          </h3>
          <CardBook />
        </div>
      </div>
    </div>
  );
}

export default Booked;
