import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className=" bg-transparent">
      <div className="flex flex-col lg:flex-row mx-auto max-w-5xl lg:space-x-32">
        <div className=" flex items-center justify-between py-4 px-4 lg:px-0 lg:py-0 ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <button
              onClick={() => setBurger(!burger)}
              className=" focus:outline-none block lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  className={!burger ? " block" : " hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />

                <path
                  className={burger ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" w-full flex justify-center">
          <div
            className={`${
              burger ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:justify-between bg-white lg:bg-transparent absolute lg:relative z-50 font-semibold lg:font-normal shadow-xl lg:shadow-none text-center w-4/5 lg:w-full rounded-lg py-4 lg:py-0`}
          >
            <div className=" flex flex-col lg:flex-row">
              <a
                href="#"
                className=" block px-4 py-2 lg:py-5 text-slate-700 hover:text-slate-500"
              >
                Pricing
              </a>
              <a
                href="#"
                className=" block px-4 py-2 lg:py-5 text-slate-700 hover:text-slate-500"
              >
                Product
              </a>
              <a
                href="#"
                className=" block px-4 py-2 lg:py-5 text-slate-700 hover:text-slate-500"
              >
                About Us
              </a>
              <a
                href="#"
                className=" block px-4 py-2 lg:py-5 text-slate-700 hover:text-slate-500"
              >
                Careers
              </a>
              <a
                href="#"
                className=" block px-4 py-2 lg:py-5 text-slate-700 hover:text-slate-500"
              >
                Community
              </a>
            </div>
            <div className=" text-center py-4 hidden lg:block">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-full">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
