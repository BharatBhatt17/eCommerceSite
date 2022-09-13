import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

function Loading() {
  return (
    <div className=" p-20 bg-white flex flex-col items-center justify-center gap-2">
      <BiLoaderCircle className="w-20 h-20 animate-spin text-orange" />
      <h1 className="text-4xl font-bold">Loading...</h1>
    </div>
  );
}

export default Loading;
