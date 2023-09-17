import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const [toggle, setToggle] = useState(true);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });

    setToggle(!toggle);
  };
  return (
    <>
      <nav
        ref={headerRef}
        className="bg-transparent  text-gray-400 w-full h-[80px] leading-[80px] flex items-center fixed z-20 top-0 left-0 "
      >
        <div className="container">
          <div className="w-full flex flex-wrap items-center justify-between mx-0 px-[10px] py-[20px] md:mx-auto md:px-3 md:py-0 ">
            <a href="#about" aria-current="page">
              <div className="flex items-center gap-[3px]  md:gap-[10px]">
                <span className="w-[35px] h-[35px]  bg-primaryColor text-white text-[18px] md:text-[18px] font-[500]  rounded-full flex items-center justify-center">
                  A
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-xl text-gray-300 font-[700]">Abhishek</h2>
                  <p className="text-gray-300 text-[14px] font-[500]">Singh</p>
                </div>
              </div>
            </a>
            <div className="flex md:order-2 gap-3 md:gap-2">
              <div>
                <button className="flex items-center gap-2 text-yellow-400 font-[600] border border-solid border-yellow-400 py-1 px-2 md:py-2 md:px-4 rounded-[8px] max-h-[40px] hover:bg-yellow-400 hover:text-white hover:font-[500] ease-in duration-300">
                  <a
                    // onClick={}
                    href="#letsConnect"
                    aria-current="page"
                  >
                    <i className="ri-send-plane-line"></i> Let's Connect
                  </a>
                </button>
              </div>
              <div
                onClick={() => setToggle(!toggle)}
                className="text-2xl block md:hidden text-smallTextColor cursor-pointer "
              >
                {toggle ? (
                  <i className="ri-menu-line"></i>
                ) : (
                  <i className="ri-close-line"></i>
                )}
              </div>
            </div>
            <div
              className={`items-center justify-between ${
                toggle ? "hidden" : "none"
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-100 xs:absolute xs:top-[100px] md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                <li>
                  <a
                    onClick={handleClick}
                    href="#about"
                    className="text-smallText font-[600]"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#services"
                    className="text-smallText font-[600]"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#Skills"
                    className="text-smallText font-[600]"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#works"
                    className="text-smallText font-[600]"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#letsConnect"
                    className="text-smallText font-[600]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
