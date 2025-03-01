import React, { Fragment } from "react";
import DataTittle from "@/component/Cards/DataTittle";

const CardBook = () => {
    const Data = DataTittle().Tittle;
  return (
    <Fragment>
      <div className="w-full sm:w-auto  flex flex-col  px-6 mx-auto bg-inherit font-Lahzeh pt-4 pb-2">
       
        <div className=" lg:grid lg:grid-cols-3 gap-4 ">
          {Data.map((items) => (
            <div
              key={items.id}
              className="border my-3 border-gray-300 pt-6 pb-12 rounded-2xl lg:pt-12 bg-white"
            >
              <h2 className="text-black font-normal text-lg mx-auto lg:px-12 px-6 ">
                {" "}
                {items.tittle}
              </h2>
              <p className="text-black font-normal text-[12px] px-6 lg:py-8 py-4 lg:px-12 leading-7">
                {" "}
                {items.detail}
              </p>
              <span className="font-semibold text-[12px] px-6 lg:px-12 text-black block">
                {items.author}
              </span>
              <span className=" font-normal text-[10px] text-black lg:px-12 px-6 pt-4">
                {items.uni}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CardBook;
