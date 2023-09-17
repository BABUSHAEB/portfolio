import React, { useEffect, useState } from "react";
import { PersonalProjects, Skills } from "../data/data";
import ProgressBar from "../DynamicComponents/ProgressBar";
import ImageSlider from "../DynamicComponents/ImageSlider";

export default function Portfoilo() {
  const [filtered, setFiltered] = useState([]);

  const filteredHandle = (e) => {
    let project = e.target.value.toLowerCase();
    if (project !== "all") {
      let filtered = PersonalProjects.filter((items) => {
        return items.Project.toLowerCase() === project;
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
    <section className="bg-gradient-to-r from-blue-950 to-slate-600 align-center-body  px-[30px] py-[60px]">
      <div className=" max-w-[1920px]">
        <div id="Skills" className="mb-[80px] px-[30px]">
          <div data-aos="fade-up" className="relative mb-5">
            <h3 className="text-[24px] font-black text-white sm:text-2xl">
              My Skills
            </h3>
            <span className="h-[1.1px] right-0 absolute w-[85%] md:w-[90%] bg-gray-300 block"></span>
          </div>
          <div className="flex md:flex-col ">
            <div className="left flex-1 w-full">
              <p
                data-aos="fade-up"
                className=" text-gray-500 font-medium w-[100%]"
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
        <div className=" px-[30px] w-full">
          <div id="works">
            <div data-aos="fade-up" className="relative mb-5">
              <div className="flex align-center justify-between py-[10px]">
                <h3 className="text-[28px] font-black text-white md:text-[32px]">
                  Works
                </h3>

                <select
                  className=" outline-none bg-yellow-400 text-[18px] text-white font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-1 px-4 rounded-[8px] "
                  onChange={filteredHandle}
                  name="project"
                  id="projects"
                >
                  <option value="all">All</option>
                  <option value="ReactJs">ReactJs</option>
                  <option value="NextJs">Nextjs</option>
                  <option value="Mern Stack">MERN Stack</option>
                </select>
              </div>
              <span className="h-[1.5px] right-0 absolute w-[85%] md:w-[90%] bg-gray-300 block"></span>
              <p
                data-aos="fade-up"
                className=" text-gray-500 mt-4 font-medium w-[100%]"
              >
                Here are my works.
              </p>
            </div>
            <div className="max-w-[1920px]">
              {filtered.length !== 0 ? (
                <ImageSlider className="mx-auto" filtered={filtered} />
              ) : (
                <div>
                  <h2 className="text-[26px] text-gray-500">
                    Oops! Project is Going on..
                  </h2>
                  <a
                    href="https://github.com/babushaeb"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="bg-yellow-500 rounded-md my-3 text-white py-2 px-4 text-[16px] font-[800]">
                      Visit Github
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
