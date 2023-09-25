import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    // container
    <div className="w-full h-[80px] bg-blue-300 flex items-center justify-center">
      {/* main         */}
      <div className="w-[90%] flex justify-between items-center  h-full ">
        {/* logo */}
        <div className="text-[20px] font-bold">AbegFundMe</div>
        {/* Nav */}
        <div className="flex  items-center gap-4 font-semibold small:hidden">
          <div>Home</div>
          <div>About</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
        {/* Logins */}
        <div className="flex  items-center gap-4 font-semibold small:hidden">
          <div>Sign in</div>
          <div className="bg-white p-2 rounded-md hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all  ">
            Sign up
          </div>
        </div>
        <div className="p-2 rounded-md hover:bg-slate-100 hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all text-[25px] meduim:hidden small:flex">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
