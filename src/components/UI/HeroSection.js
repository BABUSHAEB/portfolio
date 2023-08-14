import React from "react";
import heroImg from "../../assets/images/hero.svg";
import Resume from "../../assets/AbhishekResume.pdf";

export default function HeroSection() {
  return (
    <section className="pt-0" id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-[20px] pb-0 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-primaryColor font-[800] text-[1.8rem]  md:text-[40px] leading-[35px] sm:leading-[46px] pb-5"
            >
              I'm Abhishek Singh <br />
              <span className="text-yellow-500 pt-[80px]">Web Developer</span>
            </h1>

            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>

            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 pt-7"
            >
              <a href="#contact">
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
                <span>
                  <a
                    href="#youtube"
                    className="text-yellow-400 text-[22px] font[600]"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#youtube"
                    className="text-yellow-400 text-[22px] font[600]"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#youtube"
                    className="text-yellow-400 text-[22px] font[600]"
                  >
                    <i className="ri-skype-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#youtube"
                    className="text-yellow-400 text-[22px] font[600]"
                  >
                    <i className="ri-whatsapp-fill"></i>
                  </a>
                </span>
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
      </section>
    </section>
  );
}
