import React from "react";

const Contact = () => {
  return (
    // <div
    //   name="contact"
    //   className="w-full h-screen text-black flex justify-center items-center p-4"
    // >
    //   <form className="flex flex-col max-w-[600px] w-full">
    //     <div className="pb-8 text-center">
    //       <p className="text-4xl font-bold inline">CONTACT</p>
    //       <p className="text-slate-500 py-4">
    //         // Submit the form below or shoot me an email -
    //         vutukuri.kumar192st.niituniversity.in
    //       </p>
    //     </div>
    //     <input
    //       className="border-black border-2 p-2"
    //       type="text"
    //       placeholder="Name"
    //       name="name"
    //     />
    //     <input
    //       className="my-4 p-2 border-black border-2 "
    //       type="email"
    //       placeholder="Email"
    //       name="email"
    //     />
    //     <textarea
    //       className="border-black border-2 p-2"
    //       name="message"
    //       rows="10"
    //       placeholder="Message"
    //     ></textarea>
    //     <button className=" border-2 border-black hover:bg-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center">
    //       Let's Collaborate
    //     </button>
    //   </form>
    // </div>
    <section
      className="bg-white h-[80vh] md:h-auto sm:pt-20 pt-0  "
      name="contact"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md  ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  ">
          Contact Us
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-8"
        >
          <input
            type="hidden"
            name="access_key"
            value="72a962ad-8f5d-48f0-8474-9b07789a2541"
          />
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
              placeholder="email@gmail.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5  border-2 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-30d  hover:bg-black hover:text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
