import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <div
      className=" bg-[#212529]  flex items-center justify-center h-14 mt-9 md:mt-0"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)",
      }}
    >
      <div className="flex justify-between w-[98%] items-center">
        <p className="text-white text-xl md:text-3xl">Akhil Singh</p>
        <div className="flex gap-6 justify-center items-center  mr-1">
          <a href="https://github.com/Akhilsingh7" target="_blank">
            <FaGithub size={20} className=" text-white" />
          </a>
          <a href="mailto:akhilkumarsingh428@gmail.com" target="_blank">
            <HiOutlineMail size={25} className="text-white " />
          </a>
          <a href="https://www.linkedin.com/in/akhilsingh7" target="_blank">
            <FaLinkedin size={20} className=" text-white" />
          </a>
          {/* <a href="https://twitter.com/AkhilSi28761859" target="_blank">
            <FaTwitter size={20} className=" text-white " />
          </a> */}
        </div>

        {/*  */}
        {/* <a
          className="flex justify-between items-center w-full text-black"
          href="mailto:your-akhilkumarsingh428@example.com"
        >
          Email <HiOutlineMail size={30} />
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
