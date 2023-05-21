import React from "react";
import frame from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
const Template = ({
  title,
  description1,
  description2,
  image,
  formType,
  setisLoggedIn,
}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto  gap-x-12 gap-y-0">
      <div className="max-w-[450px] w-11/12">
        <h1 className="text-richblack-5 font-semibold text-[1.5rem] leading-[1.375]">
          {title}
        </h1>
        <p className="text-[1rem] leading-[1.3] mt-4">
          <span className="text-richblack-100">{description1}</span>
          <br />
          <span className="text-blue-100 italic">{description2}</span>
        </p>
        {formType === "signup" ? (
          <SignUpForm setisLoggedIn={setisLoggedIn} />
        ) : (
          <LoginForm setisLoggedIn={setisLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium">or</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button
          className="flex w-full justify-center items-center 
        rounded-[8px] font-medium bg-richblack-500 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6"
        >
          <FcGoogle />
          <p className="text-richblack-100">signup with google</p>
        </button>
      </div>

      <div className="relative w-11/12  max-w-[450px]">
        <img
          src={frame}
          loading="lazy"
          height={504}
          width={502}
          className="absolute"
        />
        <img
          src={image}
          loading="lazy"
          height={504}
          width={502}
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
