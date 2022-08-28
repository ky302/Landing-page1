import { CardData } from "./CardData";
import React from "react";
import { Card1 } from "./card1";

const Card = () => {
  return (
    <div className="container-main2 w-full mx-auto py-10">
      <div className="mx-auto text-center">
        <h1 className="font-bold text-4xl">What they've said</h1>
      </div>

      <Card1 />
      <div className=" text-center py-8">
        <button className=" text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-3xl py-2 px-3 ">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Card;
