import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardBackspace } from "react-icons/md";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);

      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(+id, +count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="p-10 bg-gray-100">
        <Link to="/">
          <MdKeyboardBackspace className="h-10 w-10 mb-10 border border-2 border-black hover:text-orange hover:scale-110 bg-white" />
        </Link>

        <div className=" flex flex-col sm:flex-row sm:p-20 bg-white ">
          <div className="sm:w-1/3 aspect-square">
            <img className="h-full w-full " src={product.thumbnail} />
          </div>
          <div className="flex flex-col sm:w-1/2 sm:px-10 px-4 py-4 sm:py-0">
            <h3 className="mb-3 text-xl sm:text-3xl font-bold sm:py-3 ">
              {product.title}
            </h3>
            <h1 className="text-2xl font-bold text-gray-600 mb-4">
              Rs.{product.price}
            </h1>

            <p className="text-gray-500 mb-3 text-md">{product.description}</p>
            <div className="flex sm:flex-row gap-2 py-6">
              <input
                value={count}
                onChange={handleCountChange}
                type="number"
                className="bg-white border border-gray-400 w-14 text-center"
              />
              <button
                onClick={handleButtonClick}
                className=" px-5 sm:px-8 font-bold sm:py-1 bg-orange rounded-md text-white sm:text-xl "
              >
                Add To Cart
              </button>
            </div>
            <hr />
            <h3 className="text-gray-500 text-md mt-6 ">
              Category: {product.category}
            </h3>
          </div>
        </div>
        <div className="flex justify-between rounded-xl mt-5">
          <div className="hover:scale-110 bg-white">
            {id > 1 && (
              <Link
                className="p-2  border border-2 border-black text-black flex items-center gap-2 text-xl hover:text-orange "
                to={"/products/" + (id - 1)}
              >
                <AiOutlineArrowLeft className="text-2xl " />
                Previous
              </Link>
            )}
          </div>
          <div className="hover:scale-110 bg-white">
            <Link
              className="p-2  border border-2 border-black text-black flex items-center gap-2 text-xl hover:text-orange "
              to={"/products/" + (id + 1)}
            >
              <AiOutlineArrowRight className="text-2xl" />
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
