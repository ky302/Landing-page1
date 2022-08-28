import React from "react";
import logo from "../assets/images/logo.svg";
import youtube from "../assets/images/icon-youtube.svg";
import insta from "../assets/images/icon-instagram.svg";
import pinterst from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";

const Fotter = () => {
  return (
    <div className=" w-full bg-neutral-900 ">
      <div className=" max-w-5xl grid grid-cols-1 lg:grid-cols-3 mx-auto space-x-4">
        <div className=" lg:space-y-8 order-3 lg:order-1 grid grid-rows-3 lg:max-w-xs gap-20 lg:gap-0 pt-10 text-white justify-items-center lg:justify-items-start">
          <div className=" order-3 lg:order-1">
            <img src={logo} alt="logo" className=" w-52" />
          </div>
          <div className=" order-2 lg:order-2 flex items-center space-x-10 lg:space-x-4">
            <a href="#">
              <img src={facebook} alt="facebook" className=" w-8 lg:w-6" />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube" className=" w-8 lg:w-6" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" className=" w-8 lg:w-6" />
            </a>
            <a href="#">
              <img src={pinterst} alt="pinterst" className=" w-8 lg:w-6" />
            </a>
            <a href="#">
              <img src={insta} alt="insta" className=" w-8 lg:w-6" />
            </a>
          </div>
          <div className=" order-3 lg:hidden flex justify-end px-4 text-xs text-white">
            <h5>Copyright 2021. All Rights Reserved</h5>
          </div>
        </div>

        <div className=" max-w-5xl lg:max-w-none order-2 lg:order-2 flex justify-between px-24 lg:px-0">
          <div className=" max-w-md py-10 text-white ">
            <ul className=" flex justify-center flex-col space-y-2">
              <a href="#">
                <li className="hover:text-orange-600"> Home</li>
              </a>
              <a href="#">
                <li className="hover:text-orange-600"> Pricing</li>
              </a>
              <a href="#">
                <li className="hover:text-orange-600"> Products</li>
              </a>
              <a href="#">
                <li className="hover:text-orange-600"> About Us</li>
              </a>
            </ul>
          </div>
          <div className="max-w-md py-10 text-white">
            <ul className=" flex justify-end flex-col space-y-2">
              <a href="#">
                <li className="hover:text-orange-600"> Careers</li>
              </a>
              <a href="#">
                <li className="hover:text-orange-600"> Community</li>
              </a>
              <a href="#">
                <li className="hover:text-orange-600"> Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="  order-1 lg:order-3 flex items-center justify-center lg:justify-end py-10 lg:py-0 ">
          <div className=" space-y-6">
            <div className=" flex items-center ">
              <div>
                <form className="flex items-center">
                  <div className="relative ">
                    <input
                      type="email"
                      id="email"
                      className=" bg-gray-50 border-gray-300 text-orange-700 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full lg:pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-orange-600 dark:text-orange-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="@gmail.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 px-4 ml-2 text-sm font-medium text-white rounded-2xl bg-orange-600"
                  >
                    Go
                  </button>
                </form>
              </div>
            </div>
            <div className=" hidden lg:flex flex justify-end px-4 py-2 text-xs text-white">
              <h5>Copyright 2021. All Rights Reserved</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
