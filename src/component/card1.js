import { CardData } from "./CardData";
import React from "react";
import { Swiper, SwiperperSlide } from "swiper/react";

export const Card1 = () => {
  return (
    <div className="relative items-center ">
      <div className=" flex ">
        {CardData.map((val, index) => {
          return (
            <div
              key={index}
              className=" max-w-lg h-auto inline-block flex items-center justify-center m-4"
            >
              <div className=" p-4 overflow-hidden bg-transparent cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl">
                <div className=" flex items-center justify-center">
                  <img
                    className=" h-20 w-20"
                    src={val.profile}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div className=" text-center px-6 py-4">
                  <div className="font-bold text-xl mb-2">{val.nama}</div>
                  <p className="  text-base">{val.coment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
