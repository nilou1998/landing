import React from "react";

function BookingDemo() {


  return (
    <div className="w-full sm:w-auto flex flex-col px-6 lg:px-80 mx-auto bg-white font-Lahzeh py-12">
      <div className="flex">
        <div className="px-4">
          <input
            type="checkbox"
            className="toggle toggle-warning"
            defaultChecked
          />
        </div>
        <h2 className="text-black font-semibold">لورم ایپسوم متن</h2>
      </div>
      <p className="py-8 text-black leading-8 text-2xl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه در ا لورم ایپسوم متن ساختگی با
        تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        چاپگرها و متون بلکه در ازم است
      </p>
      <button className="bg-black text-white border border-gray-300 py-2 px-4 w-1/2 rounded-full flex lg:w-fit">
        بریم بگردیم
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="white"
          className="mr-2"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>
    </div>
  );
}

export default BookingDemo;
