import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <div className="bg-white p-6 flex mx-auto justify-between items-center">
      <div>
        <Link to="/">
          <img src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg" />{" "}
        </Link>
      </div>

      <Link to="/addtocart">
        <div className="flex flex-col items-center ">
          <BiShoppingBag className="h-12 w-12 text-orange" />
          <span className="-mt-8 text-orange text-lg font-bold">
            {productCount}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
