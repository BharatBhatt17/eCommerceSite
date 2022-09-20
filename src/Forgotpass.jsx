import React from "react";
import { Link } from "react-router-dom";

function Forgotpass() {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-600 h-screen">
      <div className="bg-white p-20  shadow-2xl shadow-black">
        <h1 className="font-bold text-4xl mb-2">Forgot your password?</h1>
        <p className="text-gray-500 text-sm">
          Please enter the email you use to sign in
        </p>
        <div className="my-5">
          <p className="text-md text-gray-500">Your Email</p>
          <input
            type="email"
            placeholder="nick@gmail.com"
            className="px-2 border rounded-md py-1 w-full"
          />
        </div>
        <hr className=" mb-5" />
        <div className="flex flex-col items-center justify-center ">
          <button className="bg-indigo-500 hover:bg-indigo-400 py-1 w-full rounded-md text-white font-semibold">
            Request password reset
          </button>
          <Link
            to="/login"
            className="text-indigo-500 font-semibold hover:text-indigo-400"
          >
            Back to Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgotpass;
