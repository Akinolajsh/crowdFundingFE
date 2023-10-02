import heropix from "../../assets/student.jpeg";

const HeroPage = () => {
  return (
    <div
      className="h-[500px] w-full  flex justify-between -z-10 relative bg-black "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${heropix})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[300px] w-full z-10 absolute text-white font-bold text-[35px]  meduim:text-[25px] mt-[100px] flex text-center justify-center items-center">
        <span className="w-[500px] ">
        Everything you need for nonprofit fundraising success.
        </span>
      </div>
      <div className="h-full opacity-[0.7]  w-full bg-[black] flex justify-center items-center"></div>
      {/* main */}
      <div></div>
    </div>
  );
};

export default HeroPage;
