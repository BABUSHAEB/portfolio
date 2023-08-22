import React, { useEffect, useState } from "react";
import Card from "../DynamicComponents/Card";
import { PersonalProjects, Skills } from "../data/data";
import ProgressBar from "../DynamicComponents/ProgressBar";

export default function Portfoilo() {
  const [filtered, setFiltered] = useState([]);
  const [isFiltered, setIsFiltered] = useState(true);
  const filteredHandle = (para) => {
    setIsFiltered(!isFiltered);
    if (para === "latest") {
      let filtered = PersonalProjects.filter((items) => {
        return items.status === "new";
      });
      setFiltered(filtered);
    } else {
      setFiltered(PersonalProjects);
    }

    // status:"new"
  };
  useEffect(() => {
    setFiltered(PersonalProjects);
  }, []);

  return (
    <section className="container px-[10px]">
      <div id="Skills" className="mb-[80px] ">
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
              className="progress flex-column flex-wrap md:flex items-center h-[100%] justify-end md:justify-start"
            >
              {Skills?.map((skill, i) => {
                return (
                  <div
                    key={i}
                    className=" flex flex-col gap-6  mx-7 md:mx-9 my-5 w-[80%] md:w-1/3"
                    data-aos={Number(i) % 2 ? "fade-left" : "fade-right"}
                    data-aos-duration="1500"
                    data-aos-delay={Number(i) % 2 ? 300 : 400}
                  >
                    <ProgressBar
                      logo={skill.logo}
                      name={skill.name}
                      value={skill.value}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="works">
        <div data-aos="fade-up" className="relative mb-5">
          <div className="flex align-center justify-between py-[10px]">
            <h3 className="text-[28px] font-black text-primaryColor md:text-[32px]">
              Works
            </h3>
            {isFiltered ? (
              <button
                onClick={() => filteredHandle("latest")}
                className="bg-yellow-400 text-[18px] text-white font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-1 px-4 rounded-[8px] "
              >
                Latest Project
              </button>
            ) : (
              <button
                onClick={() => filteredHandle("reset")}
                className="bg-yellow-400 text-[18px] text-white font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-1 px-4 rounded-[8px] "
              >
                Reset
              </button>
            )}
          </div>
          <span className="h-[1.5px] right-0 absolute w-[85%] md:w-[90%] bg-gray-300 block"></span>
          <p
            data-aos="fade-up"
            className=" text-gray-700 mt-4 font-medium w-[100%]"
          >
            Here are my works.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {filtered?.map((project, i) => {
            return (
              <div key={i} className="p-4  md:w-1/2 lg:w-1/3">
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
