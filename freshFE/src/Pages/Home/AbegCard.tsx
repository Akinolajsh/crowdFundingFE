import { useState } from "react";
import pix from "../../assets/student.jpeg";
import avatar from "../../assets/dummy Image.png";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
const AbegCard = () => {
  const [state, setState] = useState<boolean>(false);

  const love = () => {
    setState(!state);
  };

  return (
    <div className="w-[400px]  hover:bg-slate-50 flex justify-center m-2 big:w-[600px]">
      <div className=" flex flex-col justify-between w-full h-full p-2">
        {/* Image */}
        <Link to="/description">
          <div className=" h-[270px]  w-full rounded-md object-cover overflow-hidden">
            <img
              src={pix}
              alt=""
              className="rounded-md duration-500 transition-all hover:cursor-pointer hover:scale-[1.07] "
            />
          </div>
        </Link>
        {/* avatar */}
        <div className="flex flex-col ">
          <Link to="/description">
            <div className="flex  items-end mt-3 mb-2 ">
              <div className="h-[40px] w-[40px] mr-3  ">
                <img
                  src={avatar}
                  className="object-cover h-full w-full rounded-[50%] hover:cursor-pointer hover:scale-[1.07] transition-all duration-500"
                  alt=""
                />
              </div>
              {/* title */}
              <div className="mb-2 font-semibold text-[15px]  w-[250px]">
                Education Mission.
              </div>
            </div>
            <div
              className="flex w-[250px] justify-between
           mb-2"
            >
              <div className="flex font-semibold text-slate-700">
                <div className="flex ">
                  {" "}
                  <div className="mr-1">Raised:</div>
                  <div className="text-[#32AE8B]">₦</div>
                </div>
                <div className="text-[#32AE8B]">2500</div>
              </div>
              <div>/</div>
              <div className="flex  font-semibold text-slate-700">
                <div className="flex ">
                  <div className="mr-1">Goals:</div>₦
                </div>
                4000
              </div>
            </div>
            <div className="flex-1 text-[12px] text-slate-400 text-clip">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              possimus harum volupte natus repudiandae, sequi a exercitationem
              sequi a exercitationem.
            </div>
          </Link>
          <div className="flex items-end  justify-between">
            {state ? (
              <div className="text-[30px] ">
                <MdFavorite
                  onClick={love}
                  className="text-red-500 hover:cursor-pointer"
                />
              </div>
            ) : (
              <div className="text-[30px] ">
                <MdOutlineFavoriteBorder
                  onClick={love}
                  className=" hover:cursor-pointer"
                />
              </div>
            )}
            <button className="p-2 bg-blue-600 rounded-md text-white font-semibold hover:cursor-pointer duration-500 transition-all hover:scale-[1.02]">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbegCard;
