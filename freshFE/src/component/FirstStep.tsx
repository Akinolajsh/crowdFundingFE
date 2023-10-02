import React from "react";
import { useState } from "react";
import pix from "../assets/download.png";
import dummy from "../assets/dummy Image.png";
import { GrGallery } from "react-icons/gr";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import mainGlobalState from "../Global/Jotai";

export const FirstStep = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>(pix);
  const [image, setImage] = useState<string>("");

  const [holder, setHolder] = mainGlobalState();


  console.log(holder);
  const onShow = () => {
    setShow(true);
  };

  const model = yup.object({
    title: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(model) });
  const onHandleImage = (el: any) => {
    const localImage = el.target.files[0];
    const saveImage = URL.createObjectURL(localImage);

    setAvatar(saveImage);
    setImage(localImage);
  };

  const onSubmitDetail = handleSubmit((data: any) => {
    const { title } = data;
    setHolder({ title, image });
    navigate("/second-step")
  });
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-blue-200">
      <form
        className="min-w-[600px] min-h-[400px] bg-white rounded-md shadow-md flex flex-col items-center "
        onSubmit={onSubmitDetail}
      >
        <div className="h-[80px] w-full flex items-center gap-3 pl-3 ">
          <div className="object-cover overflow-hidden w-[40px] h-[40px] rounded-[50%] bg-white">
            <img src={dummy} alt="" />
          </div>
          <div className="leading-4">
            <div className="font-semibold">FullName</div>
            <div className="text-[13px] font-light">companyName</div>
          </div>
        </div>
        <div className="h-[80px] w-full mt-3 flex justify-center items-end bg-slate-300">
          <input
            className="w-[100%] h-[100%]  px-3 flex items-end placeholder:text-[28px] placeholder:h-full outline-none border-none text-[35px] font-semibold"
            placeholder="Title"
            {...register("title")}
          />
          {errors?.title?.message && <div>Please Fill In This Field</div>}
        </div>
        {show ? (
          <div className="flex justify-center">
            <div className="h-[250px] w-[80%] border border-t-2 border-l-2 border-r-2 border-b-0 rounded-md bg-black">
              <img
                className="W-[100%] h-[100%] object-cover"
                src={avatar}
                alt={pix}
              />
            </div>
          </div>
        ) : null}
        <div className="flex justify-center mt-2">
          <div
            className="flex h-[50px] w-[380px] px-3  
items-center  text-[15px] rounded-md justify-center  border "
          >
            <div className="flex items-center gap-7 justify-center">
              <div
                onClick={() => {
                  onShow();
                }}
              >
                Add a photo
              </div>
              <label
                className="flex items-end"
                onClick={() => {
                  onShow();
                }}
                htmlFor="image"
              >
                <input
                  onChange={onHandleImage}
                  className="hidden"
                  type="file"
                  id="image"
                  accept="image/png, image/jpg, image/jpeg"
                />
                <GrGallery className="text-[20px] hover:cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="mt-4 flex justify-end w-full pr-3">
          <button
            className="bg-green-400 text-white py-2 px-3 rounded mb-2"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
