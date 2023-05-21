import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ({ setisLoggedIn }) => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  function clickHandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setisLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
    console.log(formData);
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-6 mt-6 "
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          name="email"
          type="email"
          placeholder="Enter the email.."
          onChange={clickHandler}
          value={formData.email}
          className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          password<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter the password.."
          onChange={clickHandler}
          value={formData.password}
          className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px]"
        />
        <span
          className="absolute  right-3 top-[38px] cursor-pointer"
          onClick={() => setshowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiFillEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs text-blue-100 text-right mt-1">
            forget password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-[8px] mt-6 font-medium text-richblack-800 text-xl px-[8px] py-[12px]">
        sign in
      </button>
    </form>
  );
};

export default LoginForm;
