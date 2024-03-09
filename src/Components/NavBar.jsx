import React from "react";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="sticky top-0 bg-white z-10">
        <div className="w-full fixed top-0 flex flex-row justify-around items-center py-4 z-50">
          <div className="logo">
            <Link to={"/"}>
              {" "}
              <TfiMicrosoftAlt className="text-4xl cursor-pointer" />{" "}
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row gap-8 cursor-pointer font-bold">
              <li>
                <Link to={"/product"}>Product</Link>
              </li>
              <li>
                <Link to={"/solution"}>Solution</Link>
              </li>
              <li>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link to={"/login"}>
              <button className="bg-green-400 rounded-md text-white font-bold border px-4 py-1">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
