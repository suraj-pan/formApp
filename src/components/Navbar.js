import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
const Navbar = ({ isLoggedIn, setisLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] mx-auto py-4 items-center  justify-between">
      <Link to="/">
        <img src={Logo} height={32} width={160} loading="lazy" />
      </Link>

      <nav className="text-richblack-100 ">
        <ul className="flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              SignUp
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setisLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
