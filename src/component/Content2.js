import React from "react";

const Content2 = () => {
  return (
    <div className="container-main2 grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-10">
      <div className=" flex items-center lg:items-start justify-center lg:justify-start">
        <div className="main-content text-center lg:text-left lg:space-y-6 ">
          <h1 className="font-bold text-4xl mx-3 lg:mx-0">
            What's different about Manage?
          </h1>
          <p className=" text-md text-gray-500 mx-8 lg:mx-0 py-6 lg:py-0 lg:w-3/5">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
      </div>

      <div className="">
        <div className="main-content">
          <div className="space-y-6">
            <div className=" flex flex-col ml-6">
              <div className="flex py-2">
                <div className="flex justify-center items-center z-20 text-white font-semibold  bg-orange-500 h-8 w-10 px-6 -mr-4 rounded-xl">
                  01
                </div>
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent pl-8 w-full z-10">
                  Track company-wide progress
                </h4>
              </div>

              <p className=" text-gray-500 mr-3 lg:ml-16">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>

            <div className=" flex flex-col ml-6">
              <div className="flex py-2">
                <div className="flex justify-center items-center z-20 text-white font-semibold  bg-orange-500 h-8 w-10 px-6 -mr-4 rounded-xl">
                  02
                </div>
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent pl-8 w-full z-10">
                  Advanced built-in reports
                </h4>
              </div>

              <p className=" text-gray-500 mr-3 lg:ml-16">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>

            <div className=" flex flex-col ml-6">
              <div className="flex py-2">
                <div className="flex justify-center items-center z-20 text-white font-semibold  bg-orange-500 h-8 w-10 px-6 -mr-4 rounded-xl">
                  03
                </div>
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent pl-8 w-full z-10">
                  Everything you need in one place
                </h4>
              </div>

              <p className=" text-gray-500 mr-3 lg:ml-16">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
