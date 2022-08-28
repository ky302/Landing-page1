import React from "react";

const Content2 = () => {
  return (
    <div className="container-main2 grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-10">
      <div className=" flex items-center lg:items-start justify-center lg:justify-start">
        <div className="main-content text-center lg:text-left space-y-6 max-w-md">
          <h1 className="font-bold text-4xl">What's different about Manage?</h1>
          <p className=" text-md text-gray-500 py-6 lg:py-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
      </div>

      <div className="">
        <div className="main-content">
          <div className="space-y-6">
            <div className="flex">
              <div className="border flex items-center text-white font-semibold justify-center bg-orange-500 h-8 w-10 px-6 py-4 mx-4 rounded-xl border">
                01
              </div>

              <div className=" space-y-4">
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent">
                  Track company-wide progress
                </h4>
                <p className=" text-gray-500">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="border text-white font-semibold flex items-center justify-center bg-orange-500 h-8 w-10 px-6 mx-4 rounded-xl">
                02
              </div>

              <div className=" space-y-4">
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent">
                  Advanced built-in reports
                </h4>
                <p className=" text-gray-500">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="border flex items-center text-white font-semibold justify-center bg-orange-500 h-8 w-10 px-6 mx-4 rounded-xl">
                03
              </div>

              <div className=" space-y-4">
                <h4 className=" font-semibold bg-orange-100 lg:bg-transparent">
                  Everything you need in one place
                </h4>
                <p className=" text-gray-500">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
