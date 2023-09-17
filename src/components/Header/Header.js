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
        className="bg-transparent align-center-body   px-1 md:px-[80px]  text-gray-500 w-full  md:w-full h-[80px] leading-[80px] flex items-center fixed  top-0 left-0 "
      >
        <div className="relative ">
          <div className=" w-[90vw] max-w-[1920px]  flex flex-row  items-center justify-between  px-[10px] py-[20px] md:mx-auto md:px-3 md:py-0 ">
            <div>
              <a href="#about" aria-current="page">
                <div className="flex items-center gap-[3px]  md:gap-[10px]">
                  <span className="w-[35px] h-[35px]  bg-primaryColor text-white text-[18px] md:text-[18px] font-[500]  rounded-full flex items-center justify-center">
                    A
                  </span>
                  <div className="leading-[20px]">
                    <h2 className="text-xl text-gray-500 font-[700]">
                      Abhishek
                    </h2>
                    <p className="text-gray-500 text-[14px] font-[500]">
                      Singh
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <ul className=" flex-row hidden md:flex gap-4 font-medium   ">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="text-[18px] font-[800]"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#services"
                  className="text-[18px] font-[800]"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#Skills"
                  className="text-[18px] font-[800]"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#works"
                  className="text-[18px] font-[800]"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#letsConnect"
                  className="text-[18px] font-[800]"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex md:order-2 gap-3 md:gap-2">
              <button className="flex text-[12px] md:text-[18px] items-center gap-2 text-yellow-400 font-[600] border border-solid border-yellow-400 py-1 px-2 md:py-2 md:px-4 rounded-[8px] max-h-[40px] hover:bg-yellow-400 hover:text-white hover:font-[500] ease-in duration-300">
                <a
                  // onClick={}
                  href="#letsConnect"
                  aria-current="page"
                >
                  <i className="ri-send-plane-line"></i> Let's Connect
                </a>
              </button>

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
          </div>
          {/* Mobile Navbar */}
          <div
            className={`items-center justify-between ${
              toggle ? "hidden" : "none"
            } w-[180px] md:hidden absolute top-[100px] right-[20px] z-9999`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 gap-0  bg-gray-300 rounded font-medium  ">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className=" text-smallText h-[50px] font-[600]"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#services"
                  className=" text-smallText font-[600]"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#Skills"
                  className=" text-smallText font-[600]"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#works"
                  className=" text-smallText font-[600]"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#letsConnect"
                  className=" text-smallText font-[600]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
