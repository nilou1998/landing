"use client";

import React from "react";
import { motion } from "framer-motion";
import DataFoundation from "@/component/foundation/Data";
const Foundation = () => {
  const Data = DataFoundation().FoundationData;
  return (
    <div className="w-full sm:w-auto flex flex-col mx-auto px-6 lg:px-80 py-12 bg-white font-Lahzeh ">
      <h2 className="text-black font-semibold px-8 text-2xl lg:flex lg:mx-auto lg:justify-center lg:text-4xl">
        چرا دلاورس
      </h2>
      <div className="lg:grid lg:grid-cols-3 gap-4">
        {Data.map((items) => (
          <div
            key={items.id}
            className="w-full sm:w-auto lg:justify-center lg:items-center lg:text-center"
          >
            <div className="pt-2 lg:justify-center lg:items-center lg:flex lg:flex-col lg:text-center   ">
              <h2 className="text-black font-semibold text-3xl lg:text-4xl lg:w-1/2">
                {/* لورم ایپسوم متن ساختگی با تولید سادگی صنعت */}
                {/* {items.mainTittle} */}
              </h2>
              <p className="pt-4 pb-12 text-gray-400 font-semibold ">
                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعتلورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم نامفهوم نامفهوم نامفهوم از صنعت */}
                {/* {items.mainDetail} */}
              </p>
            </div>

            <div className="bg-white shadow-lg w-full sm:w-auto mx-auto  lg:px-70 pb-12 rounded-2xl flex flex-col">
              <h3 className="font-semibold text-black text-xl pt-8 px-4 lg:px-0 ">
                {/* جستجو هوش مصنوعی */}
                {items.secondTittle}
              </h3>
              <p className="py-4 text-gray-800 leading-7 px-4">
                {" "}
                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعتلورم ایختوم
              نامفهوم از صنعت */}
                {items.secondDetail}
              </p>
              {/* <div className="bg-white flex -mr-7 rounded-lg flex-col">
              <div className="py-4 flex px-4    border-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="gray"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
                <span className="text-base text-black px-2">
                  لورم ایپسوم لید سادگی نامفهوم{" "}
                </span>
              </div>
              <div className="flex flex-col px-4">
                <span className="text-black py-2 text-[12px] font-medium">
                  پاسخ هوش مصنوعی
                </span>
                <p className="text-gray-500 text-[12px]">
                  با تولید سادگی نامفهوم از صنعتلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم نامفهوم نامفهوم نامفهوم از صنعت
                </p>
                <div className="w-full space-y-2 p-4 pb-8">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="relative w-full h-2 bg-gray-300 overflow-hidden "
                    >
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gray-400"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "linear",
                        }}
                        style={{ width: "50%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foundation;
