import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="">
      <img className="w-full aspect-square" src={thumbnail} />
      <div className="text-gray-400 text-sm">{category}</div>
      <div className="text-lg font-bold">{title}</div>
      <div className="text-sm font-bold">RS.{price}</div>
      <Link
        className="text-white bg-orange border-2 border-black px-3 "
        to={"/products/" + id}
      >
        View Detail
      </Link>
    </div>
  );
}

export default Product;
