import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-600 h-screen">
      <div className="bg-white w-1/3 shadow-2xl shadow-black">
        <h3 className="bg-blue-600 w-full px-3 py-2 font-semibold text-white mb-2 ">
          Sign up
        </h3>
        <div className="flex flex-col gap-2 p-3">
          <input
            type="name"
            placeholder="First Name"
            className="border px-1  rounded-md"
            required
          />
          <input
            type="name"
            placeholder="Last Name"
            className="border px-1  rounded-md"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border px-1  rounded-md"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="border px-1 rounded-md"
            required
          />
          <p className="text-sm text-gray-500">
            By clicking sign up, you agree to E-commerce site's User Agreement
            Privacy Policy.
          </p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-500 py-1 w-full rounded-md text-white font-semibold">
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center gap-1 font-semibold">
            <span>Already have an account?</span>
            <Link to="/login" className="text-sky-600 hover:text-sky-400 ">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
