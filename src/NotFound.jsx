import React from "react";
import { Link } from "react-router-dom";

function NoMatching() {
  return (
    <div className=" p-40 flex flex-col items-center justify-center">
      <img
        className="  h-40 w-40 animate-bounce"
        src="https://media.discordapp.net/attachments/957284229031546993/1016581895200444458/bharat_page_not_found-removebg-preview.png"
      ></img>
      <h1 className="text-4xl font-bold text-orange">404 ERROR !</h1>
      <p className="text-lg font-bold">Sorry, the page not found</p>
      <Link to="/">
        <button className="bg-orange text-white py-1 px-6 border border-3 border-black rounded-full font-bold offset-3 mt-3">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}

export default NoMatching;
