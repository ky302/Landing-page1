import React from "react";

const FotterUp = () => {
  return (
    <div className=" w-full bg-orange-600 ">
      <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className=" flex justify-center items-center py-10 text-white">
          <h1 className="font-semibold text-4xl max-w-md lg:max-w-none  text-center lg:text-left">
            Simplify how your team works today.
          </h1>
        </div>
        <div className=" flex items-center justify-center lg:justify-end py-8">
          <button className=" text-white font-semibold bg-white hover:bg-gray-100 text-orange-500 hover:text-orange-600 rounded-3xl py-2 px-3 ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FotterUp;
