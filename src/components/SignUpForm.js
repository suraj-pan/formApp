import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setisLoggedIn }) => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setaccountType] = useState("student");
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function clickHandler(event) {
    setformData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }

    setisLoggedIn(true);
    toast.success("account created");
    navigate("/dashboard");

    const finalData = {
      ...formData,
      accountType,
    };
    console.log(finalData);
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 max-w-max rounded-full my-1 gap-x-1">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-100 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-100 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setaccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mb-2">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              name="firstName"
              type="text"
              placeholder="Enter the firstName"
              onChange={clickHandler}
              value={formData.firstName}
              className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              last Name<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              name="lastName"
              type="text"
              placeholder="Enter the lastName"
              onChange={clickHandler}
              value={formData.lastName}
              className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px]"
            />
          </label>
        </div>
        <div className="mt-2">
          <label>
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
        </div>

        <div className="flex gap-x-4 mt-2">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create password<sup className="text-pink-200">*</sup>
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
          </label>
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm password<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter the password.."
              onChange={clickHandler}
              value={formData.confirmPassword}
              className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px]"
            />
            <span
              className="absolute  right-3 top-[38px] cursor-pointer"
              onClick={() => setshowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 w-full rounded-[8px] mt-6 font-medium text-richblack-800 text-xl px-[8px] py-[12px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
