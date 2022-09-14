import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

function AddToCart() {
  return (
    <div className="bg-gray-100 p-10">
      <Link to="/">
        <MdKeyboardBackspace className="h-10 w-10 mb-10 border-2 border-black hover:text-orange hover:scale-110 bg-white" />
      </Link>
      <div className="bg-white p-20 h-screen">
        <div className="bg-gray-200 flex justify-between items-center h-10 px-20 font-mono font-semibold ">
          <span></span>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div>
          <h1 className=" border border-gray-100 h-20">1st Item</h1>
          <h1 className=" border border-gray-100 h-20">2nd Item</h1>
          <div className="p-2 border border-gray-100 ">
            <input
              className="border border-gray-100 py-1 pl-2"
              type="text"
              placeholder="Coupon code"
            />
            <button className="text-white font-semibold bg-orange px-10 ml-2 rounded-md py-1 ">
              APPLY COUPON
            </button>
          </div>
        </div>

        <div className="w-1/2 mt-5 float-right ">
          <div className="bg-gray-100 flex justify-between items-center h-10 px-2 font-mono font-semibold ">
            <h1>Cart totals</h1>
          </div>
          <div>
            <h1 className=" border border-gray-100 h-20">Subtotal</h1>
            <h1 className=" border border-gray-100 h-20">Total</h1>
            <div className="p-2 border border-gray-100gitlens flex justify-center">
              <button className="text-white font-semibold bg-orange px-10 ml-2 rounded-md py-1">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddToCart;
