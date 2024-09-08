import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [val, setval] = useState("");

  return (
    <div className="relative w-full h-[10vh] p-4 flex items-center justify-start pl-[10%] gap-4">
      <i className={`ri-search-2-line text-2xl ${val.length > 0 ? "text-blue-500" : "text-zinc-400"}`}></i>
      <input
        onChange={(e) => setval(e.target.value)}
        value={val}
        className="w-[50%] font-semibold p-1 px-4 outline-none border-zinc-400 border-[1px] bg-transparent rounded-full text-[#6556CD]"
        type="text"
        placeholder="Search here"
      />
      {val.length > 0 && (
        <i
          onClick={() => setval("")}
          className="ri-close-circle-line text-zinc-400 text-lg"
        ></i>
      )}

      <div className="w-[48%] max-h-[38vh] bg-white absolute top-[90%] overflow-auto">
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
        <NavLink className="inline-block w-full p-4 bg-zinc-200 text-sm border-b-2 hover:bg-zinc-300">
          <img src="" alt="" />
          <h1>will search link</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
