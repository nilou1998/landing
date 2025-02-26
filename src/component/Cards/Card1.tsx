import React from "react";
import Image from "next/image";
import photo from "@/assent/photo/image-1.jpg";

function Card1() {
  return (
    <div className="w-full sm:w-auto flex flex-col px-6 lg:px-80 mx-auto bg-white font-Lahzeh pb-12 lg:border lg:border-gray-300 ">
      <h2 className="text-black font-semibold text-2xl text-center py-12 w-[90%] flex lg:flex lg:justify-center lg:mx-auto">
        لورم ایپسوم متن ساختگی با تولید سادگی صنعت
      </h2>
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
      <div className="border border-gray-300 py-48 rounded-2xl lg:hidden">
        <Image
          className="mx-auto"
          src="https://cdn.prod.website-files.com/632a253b6e9c1587d2b8853d/65c296379b2ed3380a7dabc7_logo-hubspot-featured.svg"
          width={200}
          height={200}
          alt=""
        />
      </div>

      {/* <div className=" lg:w-full gap-4 flex flex-row px-6 py-12">
        <div className="lg:w-1/4 lg:flex lg:flex-col py-6 px-8 border border-gray-400 rounded-2xl bg-black">
          <h3 className="font-semibold py-2">لورم</h3>
          <p className="text-[12px] leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی صنعت لورم ایپسوم متن ساختگی با
            تولید سادگی صنعت
          </p>
          <Image
            src={photo}
            alt="slide 1"
            className="rounded-lg w-full py-8 -mr-12 overflow-hidden"
          />
        </div>
        <div className="lg:w-1/4 lg:flex lg:flex-col py-6 px-8 border border-gray-400 rounded-2xl bg-black">
          <h3 className="font-semibold py-2">لورم</h3>
          <p className="text-[12px] leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی صنعت لورم ایپسوم متن ساختگی با
            تولید سادگی صنعت
          </p>
          <Image
            src={photo}
            alt="slide 1"
            className="rounded-lg w-full py-8 -mr-12 overflow-hidden"
          />
        </div>
        <div className="lg:w-1/4 lg:flex lg:flex-col py-6 px-8 border border-gray-400 rounded-2xl bg-black">
          <h3 className="font-semibold py-2">لورم</h3>
          <p className="text-[12px] leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی صنعت لورم ایپسوم متن ساختگی با
            تولید سادگی صنعت
          </p>
          <Image
            src={photo}
            alt="slide 1"
            className="rounded-lg w-full py-8 -mr-12 overflow-hidden"
          />
        </div>
        <div className="lg:w-1/4 lg:flex lg:flex-col py-6 px-8 border border-gray-400 rounded-2xl bg-black">
          <h3 className="font-semibold py-2">لورم</h3>
          <p className="text-[12px] leading-6">
            لورم ایپسوم متن ساختگی با تولید سادگی صنعت لورم ایپسوم متن ساختگی با
            تولید سادگی صنعت
          </p>
          <Image
            src={photo}
            alt="slide 1"
            className="rounded-lg w-full py-8 -mr-8 overflow-hidden"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Card1;
