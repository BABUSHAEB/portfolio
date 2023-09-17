import GetInTouch from "../Forms/GetInTouch";

export default function LetsConnectSection() {
  return (
    <div
      id="letsConnect"
      className="bg-gradient-to-t from-blue-950 to-slate-600 align-center-body "
    >
      <div className=" max-w-[1920px] flex flex-wrap justify-center px-0 md:px-[40px] my-[80px] align-center">
        <div className=" text-gray-400 text-[18px] gap-3 md:w-[80%] lg:w-1/3 mx-[auto]  md:my-[auto]  md:px-[30px] w-[80%] py-[80px] my-[auto]">
          Experienced front-end developer with a robust software industry and
          startup background. Seeking a challenging role to leverage expertise
          in Material UI, JavaScript, and React.js. Proficient in Hooks, Rest
          API, Chartjs, animation libraries, and responsiveness. Ready to
          contribute to innovative web projects with proven skills in creating
          dynamic and user-friendly interfaces. 😄
          <div className="flex-col pt-2">
            <button className="flex items-center gap-2 text-yellow-400 font-[600] border border-solid border-yellow-400 py-1 px-2 md:py-2 md:px-4 rounded-[8px] max-h-[40px] hover:bg-yellow-400 hover:text-white hover:font-[500] ease-in duration-300">
              <a href="tel:+918521268654" aria-current="page">
                <i className="ri-send-plane-line"></i> Let's Connect
              </a>
            </button>
            {/* <button>
            Lets
          </button>
            <h3 className="font-[700] text-[18px]"> Contact On :</h3>
            */}
            {/* <div>
              <a
                href="mailto:abhisheksingj123@gmail.com"
                className="text-primaryColor text-[16px] font-[600]"
              >
                Email : abhisheksingj123@gmail.com
              </a>
            </div>

            <div>
              <a
                href="tel:+918521268654"
                className="text-primaryColor text-[16px] font-[600]"
              >
                Mobile No : 8521268654
              </a>
            </div> */}
          </div>
        </div>

        {/* forms */}
        <GetInTouch />
      </div>
    </div>
  );
}
