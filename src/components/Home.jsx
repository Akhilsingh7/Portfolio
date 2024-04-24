import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    // <div name="home" className="w-full h-screen bg-red-300">
    <div name="home" className="w-full h-[85vh] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full animate-slide-from-left ">
        <p className="text-black text-lg ">Hi, my name is</p>
        <h1
          className="text-4xl sm:text-7xl font-bold text-slate-500"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 0%, #ffffff  55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AKHIL SINGH
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-black">
          I'm a MERN Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a mern-stack developer specialised in frontend and backend
          development for scalable web apps.I have made a variety of
          <span className="text-black"> Mern </span>Stack Applications. Want to
          know how I may help your project? Check out my projects .
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/16DGU117jRS-EJHRK62kBrQ1laRvqXe7c/view?usp=sharing"
            target="_blank"
          >
            <button className="text-black group border-2 px-6 py-3 my-2 flex items-center  border-black hover:bg-black hover:text-white ">
              {" "}
              My Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
