import React, { useState } from "react";

const Navigation = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className=" bg-gradient-to-br from-orange-500 to-orange-300">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex items-center justify-between px-4 py-4 lg:py-0 border-b border-orange-300 lg:border-b-0">
          <div>
            <a
              href="#"
              className=" uppercase font-semibold text-white text-2xl"
            >
              Brand
            </a>
          </div>
          <div>
            <button
              onClick={() => setBurger(!burger)}
              className=" focus:outline-none block lg:hidden text-white"
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

        <div
          className={`${
            burger ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}
        >
          <div className=" flex flex-col lg:flex-row">
            <a
              href="#"
              className=" block px-4 py-2 lg:py-5 text-orange-100 hover:text-white"
            >
              Blog
            </a>
            <a
              href="#"
              className=" block px-4 py-2 lg:py-5 text-orange-100 hover:text-white"
            >
              Gallery
            </a>
            <a
              href="#"
              className=" block px-4 py-2 lg:py-5 text-orange-100 hover:text-white"
            >
              About
            </a>
          </div>
          <div className=" flex flex-col lg:flex-row">
            <a
              href="#"
              className=" block px-4 py-2 lg:py-5 text-orange-100 hover:text-white"
            >
              LogIn
            </a>
            <a
              href="#"
              className=" block px-4 py-2 lg:py-5 text-orange-100 hover:text-white"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
