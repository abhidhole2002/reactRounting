import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center text-center mt-20  ">
      <div className="">
        <div>
          <h1 className=" text-sm font-semibold mt-40 mb-4 ">
            Trusted by over 2800+ companies
          </h1>
          <h1 className="text-3xl font-semibold mb-2">
            Find Your <span className="text-green-500">Remote Job</span>
          </h1>
          <h1 className="text-3xl font-semibold mb-5">Easy And Fast</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            necessitatibus!
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Email Address"
            className="px-6 py-2 rounded-sm mb-20 border border-blue-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="px-6 py-2 rounded-sm mb-20 bg-black text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
