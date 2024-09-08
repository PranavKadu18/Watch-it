import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[23%] h-[100%] bg-[#1F1E24] p-10 border-r-[1px]">
      <div className="flex gap-4 text-xl text-white">
        <i class=" text-[#6556CD] ri-tv-fill"></i>
        <h1 className="font-bold">SCSDB.</h1>
      </div>

      <div className="mt-12 mb-2">
        <h1 className="text-md text-white font-semibold">New Feeds</h1>
        <nav className="flex flex-col mt-8 text-zinc-400 text-sm">
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
            <i class="ri-fire-fill mr-1"></i>
            Trending
          </NavLink>
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
            <i class="ri-bard-fill mr-1"></i>
            Popular
          </NavLink>
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
            <i class="ri-movie-2-fill mr-1"></i>
            Movie
          </NavLink>
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
            <i class="ri-tv-2-fill mr-1"></i>
            Tv-Show
          </NavLink>
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
            <i class="ri-team-fill mr-1"></i>
            People
          </NavLink>
        </nav>
      </div>

      <hr />

      <div className="mt-4">
        <h1 className="text-md text-white font-semibold">Website Information</h1>
        <nav className="flex flex-col mt-8 text-zinc-400 text-sm">
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
          <i class="ri-information-2-fill mr-1"></i>
            About-Us
          </NavLink>
          <NavLink className="p-3 rounded-md hover:bg-[#6556CD] hover:scale-110 hover:text-white transition-all ease-in-out duration-700">
          <i class="ri-phone-fill mr-1"></i>
            Contact
          </NavLink>
        </nav>
      </div>

    </div>
  );
};

export default Sidenav;
