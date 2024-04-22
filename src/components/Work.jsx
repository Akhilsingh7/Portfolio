import React from "react";
import { data } from "../data/data.js";
import { MdArrowOutward } from "react-icons/md";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full md:h-screen text-black pt-20 pb-28 sm:pb-0"
    >
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl  font-bold inline ">Projects</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {/* Gird Item */}
          {project.map((item, index) => (
            // <div
            //   key={index}
            //   style={{ backgroundImage: `url(${item.image})` }}
            //   className="shadow-lg shadow-[#040c16] group container rounded-md
            //   flex justify-center text-center items-center mx-auto content-div "
            // >

            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm   hover:scale-105 transition-transform duration-300"
            >
              <img
                className="rounded-t-lg "
                src={`${item.image}`}
                alt="Loading"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {`${item.name}`}
                </h5>

                <p className="mb-3 font-normal text-gray-700">{item.detail}</p>
                <a
                  href={item.path}
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-m font-medium text-center text-black  rounded-lg   "
                >
                  GitHub{" "}
                  <span className=" ml-1 mb-1 text-xl">
                    <MdArrowOutward />
                  </span>
                  {/* <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <div className="opacity-0 group-hover:opacity-100 ">
<span className="text-2xl font bold text-white tracking-wider ">
  {item.name}
</span>
<div className="pt-8 text-center ">

  <a href={item.github} target="_blank">
    <button
      className="text-center rounded-lg px-4 py-3 m-2
       bg-white text-gray-700 font-bold text-lg"
    >
      Code
    </button>
  </a>
\
  <a href={item.live} target="_blank">
    <button
      className="text-center rounded-lg px-4 py-3 m-2
       bg-white text-gray-700 font-bold text-lg"
    >
      Live
    </button>
  </a>
</div>
</div> */
}
