import React from "react";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div className="bg-sky-600 h-screen flex flex-col items-center justify-center">
      <img
        src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-royal-brites-poster-foam-board-photo-paper-royal-lace-19.png"
        className="text-white h-52 w-52 "
      />
      <div className="flex flex-col gap-1 ">
        <input
          type="text"
          placeholder="USERNAME"
          className="rounded-md px-5 py-1 "
        />
        <input
          type="password"
          placeholder="PASSWORD"
          className="rounded-md  px-5 py-1 "
        />
        <button className="bg-white text-sky-500 font-semibold mt-10 py-1 rounded-md hover:bg-gray-200">
          LOGIN
        </button>
        <div className="flex justify-between text-white font-semibold text-sm ">
          <div>
            <Link to="/signup" className="hover:text-gray-200">
              Sign Up
            </Link>
          </div>
          <div>
            <Link to="/forgotpassword" className="hover:text-gray-200">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
