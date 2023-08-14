import React from "react";

export default function Footer() {
  let date = new Date();
  date = date.getFullYear();
  return (
    <footer className="text-gray-600  relative  ">
      <div className="bg-yellow-400 h-[200px]  w-[100%]">
        <div
          data-aos="fade-up"
          className=" px-5 py-6 flex-row align-center justify-between  md:flex-col md:align-center"
        >
          <div>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-white font-[800] text-[1.8rem]  md:text-[42px] leading-[35px] sm:leading-[46px] py-3"
            >
              Let's Talk
            </h1>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 md:mt-5 gap-4 justify-center sm:justify-start">
              <span>
                <a
                  href="#youtube"
                  className="text-primaryColor hover:text-white text-[28px]  md:text-[34px] font[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primaryColor hover:text-white text-[28px]  md:text-[34px]  font[600]"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primaryColor hover:text-white text-[28px] md:text-[34px]  font[600]"
                >
                  <i className="ri-skype-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primaryColor hover:text-white text-[28px] md:text-[34px]  font[600]"
                >
                  <i className="ri-whatsapp-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-primaryColor hover:text-white text-[28px] md:text-[34px]  font[600]"
                >
                  <i className="ri-phone-fill"></i>
                </a>
              </span>
            </span>
          </div>
          <div>
            <p className="text-[13px] md:text-[18px] text-primaryColor text-center md:text-right mt-[20px]  md:mt-0 ">
              © {date} All Copyright Reserved&nbsp;-&nbsp;
              <a
                href="https://linkedin.com/in/babushaeb"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-white"
              >
                @Abhishek
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
