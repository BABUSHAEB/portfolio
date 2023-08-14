import React from "react";

export default function Card(props) {
  let { project } = props ?? {};
  let { Title, Image, Skills, Description, ViewProject, ViewCode } = project;
  return (
    <div className="h-[auto] border-2 border-yellow-300 border-opacity-40 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-42 w-full object-cover object-center"
        src={Image ? Image : "https://dummyimage.com/720x400"}
        alt="blog"
      />
      <div className="p-6">
        <h1 className=" text-[22px]  text-primaryColor font-[900] mb-3">
          {Title}
        </h1>
        <p className="leading-relaxed mb-3">{Description.substring(0, 333)}</p>
        <div className="flex items-center gap-4 flex-wrap ">
          <div
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-delay="200"
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
    </div>
  );
}
