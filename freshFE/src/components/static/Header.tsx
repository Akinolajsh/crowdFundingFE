import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  const dropDown = () => {
    setState(!state);
  };

  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);

  return (
    // container
    <div>
      {show ? (
        <div
          className=" text-[#222b33] w-full h-[80px]  flex items-center justify-center bg-transparent duration-300 z-50 fixed border-b-2 border-blue-300"
          style={{ background: "white" }}
        >
          {/* main         */}
          <div className="w-[90%] flex justify-between items-center  h-full ">
            {/* logo */}
            <div className="text-[20px] font-bold">AbegFundMe</div>
            {/* Nav */}
            <div className="flex  items-center gap-8  meduim:hidden">
              <Link to="/">
                {" "}
                <div className="hover:underline hover:cursor-pointer duration-500">
                  Home
                </div>
              </Link>
              <Link to="/first">
              <div className="hover:underline hover:cursor-pointer">
                Launch a Campaign
              </div>
              </Link>
            </div>
            {/* Logins */}
            <div className="flex  items-center gap-4 font-semibold meduim:hidden">
              <div className="hover:cursor-pointer ">Sign in</div>
              <div className="bg-[dodgerblue] py-2 px-4 rounded-md hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all  text-white">
                Sign up
              </div>
            </div>
            {/* dropDown */}
            <div
              className="p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer hover:scale-[1.02] duration-700 transition-all text-[25px] hidden meduim:flex hover:text-black  "
              onClick={dropDown}
            >
              <AiOutlineMenu />
            </div>
            {state ? (
              <div
                className="h-[220px] w-[150px]  top-[90px] rounded-md absolute right-3 flex flex-col justify-between text-[white] font-semibold z-100"
                style={{
                  backdropFilter: "blur( 7px )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  background: "rgba( 255, 255, 255, 0.25 )",

                  // backGround: rgba( 255, 255, 255, 0.25 );
                  // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                  // backdrop-filter: blur( 7px );
                  // -webkit-backdrop-filter: blur( 7px );
                  // border-radius: 10px;
                  // border: 1px solid rgba( 255, 255, 255, 0.18 );
                }}
              >
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                  Home
                </div>
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                  About
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                  Contact
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black ">
                  About
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all ">
                  Sign in
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all ">
                  Sign up
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className=" text-[white] w-full h-[80px]  flex items-center justify-center z-10 duration-1000 fixed bg-transparent ">
          {/* main         */}
          <div className="w-[90%] flex justify-between items-center  h-full ">
            {/* logo */}
            <div className="text-[20px] font-bold">AbegFundMe</div>
            {/* Nav */}
            <div className="flex  items-center gap-8  meduim:hidden">
              <Link to="/">
                {" "}
                <div className="hover:underline hover:cursor-pointer duration-500">
                  Home
                </div>
              </Link>
              <div className="hover:underline hover:cursor-pointer">
                Launch a Campaign
              </div>
            </div>
            {/* Logins */}
            <div className="flex  items-center gap-4 font-semibold meduim:hidden">
              <div className="hover:cursor-pointer ">Sign in</div>
              <div className="bg-[dodgerblue] py-2 px-4 rounded-md hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all  text-white">
                Sign up
              </div>
            </div>
            {/* dropDown */}
            <div
              className="p-2 rounded-[50%] hover:bg-slate-100 hover:cursor-pointer hover:scale-[1.02] duration-700 transition-all text-[25px] hidden meduim:flex hover:text-black  "
              onClick={dropDown}
            >
              <AiOutlineMenu />
            </div>
            {state ? (
              <div className="h-[130px] w-[200px]  top-[90px] rounded-md absolute right-3 flex flex-col justify-between text-[white] font-semibold z-100" style={{
                
                backdropFilter: "blur( 7px )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                background: "rgba( 255, 255, 255, 0.25 )",
              }}>
                <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black">
                  Home
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black">
                  Launch a Campaign
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black">
                  Sign in
                </div>
                <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black">
                  Sign up
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
