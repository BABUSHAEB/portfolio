import React, { useState } from "react";

export default function Card(props) {
  let { project } = props ?? {};
  let {
    Title,
    Project,
    Date,
    Image,
    Skills,
    Description,
    ViewProject,
    ViewCode,
  } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" relative  w-[80vw] md:w-[600px] mx-2 md:mx-auto mt-[30px]">
      <div
        className="h-[320px] "
        style={{
          background: `url(${
            Image ? Image : "https://dummyimage.com/720x400"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundOrigin: "center",
          objectFit: "fill",

          width: "100%",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <>
            <div className=" h-full px-3 py-4 bg-opacity-90 bg-white z-[555]">
              <h1 className=" text-[22px]  text-primaryColor font-[900] mb-3">
                {Title}
              </h1>
              <p className="leading-relaxed mb-3">
                {Description.substring(0, 100)}
              </p>
              <div className="flex flex-wrap justify-start my-[5px]">
                {Skills?.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="flex justify-center items-center m-1 font-medium py-[6px] px-3 bg-yellow-400 rounded-full text-primaryColor"
                    >
                      <div className="text-[13px] font-[700] leading-none max-w-full flex-initial">
                        {skill}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-4 flex-wrap ">
                <div
                  // data-aos="fade-right"
                  // data-aos-duration="1800"
                  // data-aos-delay="200"
                  className="flex items-center gap-4 md:gap-6 pt-7"
                >
                  <a href={ViewProject} rel="noreferrer" target="_blank">
                    <button className="bg-yellow-400 text-white font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-2 px-4 rounded-[8px] ">
                      <i className="ri-live-fill"></i> Project
                    </button>
                  </a>
                  {/* data-aos="fade-left" data-aos-duration="1800" data-aos-delay="200" */}
                  <a href={ViewCode} rel="noreferrer" target="_blank">
                    <button className=" border border-solid border-yellow-300 text-yellow-500 font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-2 px-4 rounded-[8px] ">
                      <i className="ri-github-fill"></i>Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <span className="bg-yellow-500 px-3 py-2 rounded-xl text-white font-bold text-[16px] absolute -top-[20px] right-[5px]">
        {Project}
      </span>
      <p className=" px-3 py-2 my-2 rounded-xl text-gray-300  text-[18px] ">
        {Date}
      </p>
    </div>
  );
}
