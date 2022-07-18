import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaBlog, FaMediumM } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-start justify-around w-full h-auto pt-20 md:flex-row" id='contact'>
        <div className="p-5 ">
          <ul>
            <p className="pb-6 text-3xl font-bold text-center text-gray-800">
              <span className="text-gray-600">Batool</span>Blog
            </p>
            <div className="flex gap-6 pb-5">
              <a href="mailto:batoolbtoush98@gmail.com">
                {" "}
                <AiOutlineMail className="text-2xl cursor-pointer hover:text-gray-600" />
              </a>
              <a href="https://www.linkedin.com/in/batool-ragayah/" target="_blank">
                {" "}
                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://github.com/BatoolBtoush" target="_blank">
                {" "}
                <FaGithub className="text-2xl cursor-pointer hover:text-gray-600" />
              </a>
              <a href="https://hashnode.com/@batool" target="_blank">
                {" "}
                <FaBlog className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://medium.com/@batoolragayah" target="_blank">
                {" "}
                <FaMediumM className="text-2xl cursor-pointer hover:text-yellow-600" />
              </a>
            </div>
          </ul>
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center bg-gray-50">
        <h1 className="font-semibold text-gray-800 ">
          © 2022 All rights reserved | Built with ❤ by{" "}
          <span className="font-semibold cursor-pointer hover:text-blue-600">
            Batool{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
