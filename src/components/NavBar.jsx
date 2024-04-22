import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white  text-slate-500 z-40 ">
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white  text-slate-500 z-40 top-0">
      <div>
        {/* <img src={Logo} alt="Logo Image" style={{ width: "200px" }} /> */}
        <h1
          className="md:text-4xl text-2xl  bold text-black"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          Akhil Singh
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-black duration-500 text-lg">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="hover:text-black duration-300 text-lg">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="hover:text-black duration-500 text-lg">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-black duration-500 text-lg">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-black duration-500 text-lg">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen text-black bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6  text-3xl md:text-4xl hover:text-5xl duration-500 ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="py-6 text-3xl md:text-4xl hover:text-5xl duration-500">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-110}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl md:text-4xl hover:text-5xl duration-500">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl md:text-4xl hover:text-5xl duration-500 ">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-45}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://www.linkedin.com/in/akhilsingh7"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/Akhilsingh7"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto:your-akhilkumarsingh428@example.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://drive.google.com/file/d/16DGU117jRS-EJHRK62kBrQ1laRvqXe7c/view?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
