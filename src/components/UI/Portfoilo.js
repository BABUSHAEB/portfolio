import React from "react";
import ProgressBar from "./ProgressBar";
import Card from "../Card/Card";
import { PersonalProjects } from "../data/data";

export default function Portfoilo() {
  console.log(PersonalProjects);
  return (
    <section id="portfolio" className="container">
      <div className="mb-[80px] ">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-[24px] font-black text-primaryColor sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[85%] md:w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-start"
            >
              <div className=" flex flex-col gap-6  mx-7 md:mx-9 my-5 w-[80%] md:w-[50%]">
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"HTML"}
                  value={95}
                />
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"CSS"}
                  value={88}
                />
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"React Js"}
                  value={80}
                />
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"Material UI"}
                  value={80}
                />
                <ProgressBar
                  logo={<i className="ri-html5-line"></i>}
                  name={"Tailwind CSS"}
                  value={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-[24px] font-black text-primaryColor sm:text-2xl">
            Works
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[85%] md:w-[90%] bg-gray-300 block"></span>
          <p
            data-aos="fade-up"
            className=" text-gray-700 mt-4 font-medium w-[100%]"
          >
            Here are my works.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {PersonalProjects?.map((project, i) => {
            return (
              <div key={i} className="p-4  md:w-1/3">
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
