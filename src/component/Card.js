import { CardData } from "./CardData";
import React from "react";
import { Card1 } from "./card1";
import { Carousel } from "flowbite-react";

const Card = () => {
  return (
    <div className="mx-auto text-center my-16 space-y-8 lg:space-y-0 ">
      <h1 className="font-bold text-4xl">What they've said</h1>
      <div className=" h-60 sm:h-64 xl:h-80 2xl:h-96 duration-800">
        <Carousel>
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
        </Carousel>
      </div>
      <button className=" text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-3xl py-2 px-3 ">
        Get started
      </button>
    </div>
  );
};

export default Card;
