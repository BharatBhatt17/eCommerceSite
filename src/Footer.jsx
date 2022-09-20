import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-footer p-8  text-white pt-20">
      <div className="x sm:grid sm:grid-cols-4 sm:gap-12 flex flex-col items-center sm:items-start gap-5 ">
        <div className="sm:flex">
          <div>
            <img src="https://trycasuals.com/wp-content/uploads/2019/06/print-favicon-free-img-1.png"></img>
            <h1 className="text-2xl mb-3 mt-8">Custom Print Store</h1>
            <div className=" flex gap-5 text-xl">
              <a href="https://instagram.com" target="_blank">
                <AiOutlineInstagram className="hover:text-orange" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <AiOutlineTwitter className="hover:text-orange" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <AiFillLinkedin className="hover:text-orange" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <AiOutlineFacebook className="hover:text-orange" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-2xl mb-3">
            Get in Touch with Us for the Best Quality Custom Prints & Supplies.
          </h1>
          <p>
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>

        <div className=" flex flex-col">
          <h1 className="text-2xl mb-3">Quick Links</h1>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Know More About Us
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Visit Store
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Let’s Connect
          </a>
        </div>

        <div className=" flex flex-col">
          <h1 className="text-2xl mb-3">Important Links</h1>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Privacy Policy
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Shipping Details
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className="hover:text-orange"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="mt-32">
        <hr />
        <div className="flex justify-between text-center mt-8">
          <h3>Copyright © 2022 | TryCasuals</h3>
          <h3>Powered By TryCasuals</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
