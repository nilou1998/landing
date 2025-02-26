import React, { Fragment } from "react";
import DataTittle from "./DataTittle";
function Card2() {
  const Data = DataTittle().Tittle;
  return (
    <Fragment>
      <div className="w-full sm:w-auto  flex flex-col  px-6 lg:px-80 mx-auto bg-white font-Lahzeh pt-12 pb-2">
        <h2 className="text-black font-semibold lg:text-2xl lg:flex lg:justify-center lg:py-4 text-xl">
          ساخته‌شده برای کسب‌وکارها، محبوب نوآوران
        </h2>
        <p className="py-4 text-gray-500 text-justify lg:flex lg:justify-center leading-7">
          به شرکت‌های پیشرو در حمل‌ونقل، خرده‌فروشی و اقامتگاهی بپیوندید که از
          دلاورس برای ایجاد روابط قوی‌تر با مشتریان و رشد هوشمندانه‌تر استفاده
          می‌کنند.
        </p>
        <div className=" lg:grid lg:grid-cols-3 gap-4 ">
          {Data.map((items) => (
            <div
              key={items.id}
              className="border my-6 border-gray-300 pt-24 pb-12 rounded-2xl"
            >
              <h2 className="text-black font-normal text-lg mx-auto px-12 ">
                {" "}
                {items.tittle}
              </h2>
              <p className="text-black font-normal text-[12px] px-12 py-8 leading-7">
                {" "}
                {items.detail}
              </p>
              <span className="font-semibold text-[12px] px-12 text-black block">
                {items.author}
              </span>
              <span className=" font-normal text-[10px] text-black px-12 pt-4">
                {items.uni}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Card2;
