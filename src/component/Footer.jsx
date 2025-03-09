import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:mr-16 ">
        <div className="flex flex-col sm:flex-row gap-16 mb-8">
          <div className="flex-1">
            <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              tempore nobis assumenda tempora? Quae dolor, tenetur, obcaecati
              commodi adipisci laudantium nostrum quas accusamus!
            </p>
          </div>

          <div className="flex-1 ">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex-1">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+91-212-456-789</li>
              <li>contact@glamify.com</li>
            </ul>
          </div>
        </div>

        <div>
          <hr className="my-6  border-gray-300 mt-4 " />
          <p className="text-sm text-center text-gray-600">
            Copyright 2025@ glamify.com - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
