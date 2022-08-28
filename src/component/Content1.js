import React from "react";
import front1 from "../assets/images/illustration-intro.svg";

const Content1 = () => {
  return (
    <div className="container-main grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-10 ">
      <div className=" order-2 lg:order-1 flex items-center justify-center lg:justify-start lg:items-start lg:pt-14">
        <div className="main-content text-center lg:text-left space-y-6 max-w-md">
          <h1 className="font-bold text-4xl">
            Bring everyone together to build better products.
          </h1>

          <p className=" text-md text-gray-500">
            Manage makes it simple for software teams to plan day-to-daytasks
            while keeping the larger team goals in view.
          </p>
          <button className=" text-white font-semibold bg-orange-500 hover:bg-orange-600 rounded-3xl py-2 px-3 ">
            Get started
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center order-1 lg:order-2">
        <img src={front1} alt="front1" className=" w-11/12 " />
      </div>
    </div>
  );
};

export default Content1;
