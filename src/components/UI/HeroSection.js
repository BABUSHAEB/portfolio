import React, { useEffect, useRef } from "react";
import heroImg from "../../assets/images/hero.svg";
import Resume from "../../assets/Abhishek-Resume.pdf";
import SocialIcon from "../DynamicComponents/SocialIcon";
import { SocialMedia } from "../data/data";
import Typed from "typed.js";

export default function HeroSection() {
  const roles = useRef(null);

  useEffect(() => {
    const typed = new Typed(roles.current, {
      strings: [
        "Front-End Developer",
        "JavaScript Developer",
        "ReactJs Developer",
        "Web Developer",
        "MERN Developer",
        "NextJs Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 200,
      typeSpeed: 200,
      loop: true,
      backSpeed: 200,
      backDelay: 200,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      className="pt-3 align-center-body bg-gradient-to-r from-blue-950 to-slate-600 py-[40px]"
      id="about"
    >
      <div className=" mx-[auto] text-gray-600 body-font max-w-[1920px]">
        <div className=" mx-auto flex px-5 pt-[80px] md:py-[80px] pb-0 md:flex-row flex-col-reverse gap-[40px] md:gap-0 items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-primaryColor font-[700]   text-[24px] md:text-[26px] lg:text-[42px] leading-[35px] sm:leading-[46px] pb-5"
            >
              I'm Abhishek Singh &amp;
              <br />
              <span className="text-yellow-500 pt-[80px]">
                &lt; <span ref={roles}> </span> &gt;
              </span>
            </h1>

            <p className="mb-8 text-white  leading-relaxed">
              I am a seasoned front-end developer with a strong background in
              both the software industry and startup sector. I am actively
              seeking a fulfilling role where I can apply my expertise in
              Material UI, JavaScript, and React.js to contribute to innovative
              web projects. My proficiency in Hooks, Rest API, Chartjs,
              animation libraries, and responsiveness enables me to create
              dynamic and user-friendly interfaces that enhance user
              experiences.
              {/* Begin my journey in front-end development in November 2021,
              initially as an SAP UI5 Trainee at Arteria Technologies Pvt. Ltd.,
              and later on, I joined Harns Technologies as Software Developer in
              September 2022. where I used to work on Technologies like React,
              Material UI, JavaScript, API Handling, React Router, NextJs,
              Tailwind CSS, and other Animation libraries. */}
              {/* Started my journey in front-end development in Nov 2021, initially
              as a SAP UI5 Trainee at Arteria Technologies Pvt Ltd, and later I
              joined Harns Technologies Pvt. Ltd. as a Software Developer where
              I worked on React, Material UI, JavaScript, React Router, NextJS,
              Tailwind CSS, Adaptable expertise across a range of technologies
              to build dynamic web solutions. */}
            </p>

            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 pt-7"
            >
              <a href="#letsConnect">
                <button className="bg-yellow-400 text-white font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-2 px-4 rounded-[8px] ">
                  <i className="ri-mail-line"></i> Hire Me!
                </button>
              </a>
              <a
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-delay="200"
                href={Resume}
                download
                // className="text-yellow-400 font-[600] text-[16px] border border-solid border-yellow-300 "
              >
                <button className=" border border-solid border-yellow-300 text-yellow-500 font-[500] flex items-center gap-2 hover:bg-yellow-300 ease-in duration-300 py-2 px-4 rounded-[8px] ">
                  <i className="ri-download-2-line"></i>Resume
                </button>
                {/* see portfolio */}
              </a>
            </div>
            <div className="flex-col justify-center items-start gap-4 pt-8">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>
              <span className="flex md:inherit items-center gap-[15px] md:gap-9 pt-4">
                {SocialMedia?.map((socialm, i) => {
                  return (
                    <SocialIcon
                      key={i}
                      component="herosection"
                      socialm={socialm}
                    />
                  );
                })}
              </span>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
