import detailPix from "../../assets/blue sky.jpeg";

const AbegDetailDescription = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center  flex-wrap my-8">
      {/* main */}
      <div
        className="w-[90%] flex  h-[100%]
      justify-between  flex-wrap  meduim:justify-center"
      >
        {/* left */}
        <div className="w-[570px] h-[100%]  m-2 meduim:w-[600px] ">
         <div className=" flex h-[60px]  items-center">
         <div className="text-[30px] font-semibold meduim:flex-1 meduim:text-[23px] small:text-[14px]">
            Legal Fund for Ontario Agents
          </div>
          <button
                className=" rounded-md bg-[dodgerblue] py-2 px-4 text-[20px] text-white font semibold hover:bg-blue-600 duration-500 hover:cursor-pointer hidden meduim:flex small:flex small:py-1 small:px-2"
                type="button"
              >
                Donate
              </button>
         </div>
          <div className="h-[300px] w-full  mt-7">
            <img
              src={detailPix}
              className="object-cover h-full w-full rounded-md"
              alt="image loaing...."
            />
          </div>
          <div className="flex items-center w-full justify-between mt-5">
            <div className="h-[50px] w-[50px]   ">
              <img
                src={detailPix}
                className="object-cover h-full w-full rounded-[50%]"
                alt=""
              />
            </div>
            <div className="ml-3  w-[90%]">
              <div className="text-[13px] font-semibold">companyName</div>
              <div className="text-[14px] font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercionem quia pariaturExercitationem quia
                pariatuExercitationem quia pariatu{" "}
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[600px]  h-[100%]  items-center flex meduim:w-[650px]">
          <div>
            <div className="w-full h-[100%]  mt-[65px] text-[15px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nobis unde nisi commodi sed numquam magni beatae
              harum, necessitatibus eveniet iusto quaerat aut. Repudiandae,
              aperiam? Rerum ipsam ea praesentium aut similique placeat aliquam,
              nostrum eius, debitis, cupiditate hic unde excepturi! Odio officia
              corporis optio laboriosam excepturi itaque voluptatum porro nihil
              quaerat tempore explicabo, quod ea qui nostrum in dignissimos quia
              rem. Dolorum repellat nisi earum, maxime et laboriosam impedit eum
              veritatis fugiat facilis qui modi corrupti voluptas consequatur
              nam ullam reiciendis. Suscipit ipsam sapiente optio quaerat
              eveniet minus saepe neque non laboriosam, autem dignissimos sunt
              repudiandae. Enim, fugiat. Quisquam, reprehenderit. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Dolores minus
              assumenda itaque dignissimos natus cupiditate fugiat eius odit,
              ducimus vitae? Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iusto, fugiat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Fuga perferendis, sint dolorum quos
              vel voluptas neque dolore at quas quis.
            </div>

            {/* button*/}
            <div className=" text-center mt-3">
              <button
                className="w-[300px] rounded-md bg-[dodgerblue] p-2 text-[20px] text-white font semibold hover:bg-blue-600 duration-500 hover:cursor-pointer "
                type="button"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbegDetailDescription;
