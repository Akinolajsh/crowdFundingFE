import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import mainGlobalState from "../Global/Jotai";
import { useNavigate } from "react-router-dom";

const SecondStep = () => {
  const [holder, setHolder]:any = mainGlobalState();

  const navigate = useNavigate();

  const model = yup.object({
    motivation: yup.string().required(),
    description: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmitDetail = handleSubmit((data: any) => {
    const { motivation, description } = data;
    setHolder({ title: holder?.title,image: holder?.image,description, motivation });
    navigate("/third-step");
  });

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-blue-200">
      <form
        className="min-w-[600px] min-h-[400px] bg-white rounded-md shadow-md flex flex-col items-center "
        onSubmit={onSubmitDetail}
      >
        <div className="flex m-3 gap-3 items-start flex-col">
          <div className=" text-[18px] font-semibold">Motivation:</div>
          <div className="h-[130px] w-[550px]   ">
            <textarea
              className="  rounded-md h-full p-2 w-full outline-blue-200 border resize-none bg-slate-100"
              {...register("motivation")}
            />
            {errors?.motivation?.message && (
              <div>Please Fill In This Field</div>
            )}
          </div>
        </div>
        <div className="flex m-3 gap-3 items-start flex-col">
          <div className=" text-[18px] font-semibold">Description:</div>
          <div className="h-[270px] w-[550px]   ">
            <textarea
              className="bg-slate-100  rounded-md h-full p-2 w-full outline-blue-200 border resize-none"
              {...register("description")}
            />
            {errors?.description?.message && (
              <div>Please Fill In This Field</div>
            )}
          </div>
          <div className="mt-4 flex justify-end w-full pr-3">
          <button
            className="bg-green-400 text-white py-2 px-3 rounded mb-2"
            type="submit"
          >
            Next
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
