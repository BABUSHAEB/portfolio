import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="align-center-body bg-gradient-to-l from-blue-950 to-slate-600 pt-[80px]">
        <div className="text-center">
          <h2 className="text-white font-[800] text-[2.4rem] mb-5">
            Professional Experience
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-white font-[500] text-[500] text-[16px] leading-7">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            consequatur magnam sint deleniti rem, facilis distinctio
            reprehenderit nihil tempora atque. */}
            My experience at my last company was incredibly enriching and
            positive. It provided me with a platform to excel as a front-end
            developer, allowing me to contribute to exciting projects and
            collaborate with a talented team. The supportive environment
            fostered both personal and professional growth, leaving me equipped
            and enthusiastic to take on new challenges.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12"></div>
        <div className="w-[100%] py-3 px-2 sm:max-w-xl sm:mx-auto sm:ps-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* vertical line running through the middle */}
            <div className="hidden absolute w-1 sm:block  bg-indigo-300 h-full left-1/2 transfrom-translate-x-1/2"></div>
            {/* left card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1500"
                      className="bg-blue-950 p-4 rounded shadow group hover:bg-slate-600 cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[800] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                        Frontend developer
                      </h3>
                      <h4 className="text-yellow-400 font-[600] mb-1 group-hover:text-white group-hover:font-[600] text-[16px]">
                        Sep 2022 - Jul 2023
                      </h4>
                      <p className="text-[15px] text-gray-600  group-hover:text-white group-hover:font-[500] leading-7">
                        Converting Figma files into Responsive web Design using
                        Reactjs, Material UI, and handling APIs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-yellow-500  text-white text-[20px] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <span>
                    <i className="ri-reactjs-line"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* Right Card */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row ">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                      className="bg-blue-950 p-4 rounded shadow group hover:bg-slate-600 cursor-pointer ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[800] mb-2 group-hover:text-white group-hover:font-[600] text-2xl">
                        SAP UI Trainee
                      </h3>
                      <h4 className="text-yellow-400 font-[600] mb-1 group-hover:text-white group-hover:font-[600] text-[16px]">
                        Nov 2021 - Jul 2022
                      </h4>
                      <p className="text-[15px] text-gray-600 group-hover:text-white  group-hover:font-[500] leading-7">
                        Creating user for clients and configuration of
                        Destination, IDP Handling and User Group Assign to
                        Cockpit Group/Role .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-yellow-500  text-white text-[20px] border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <span>
                    <i className="ri-html5-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
