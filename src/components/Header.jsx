import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)) , url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mt-2 w-full h-[60vh] relative z-0"
    >
      <div className="absolute left-[5%] top-[55%] h-auto w-[70%]">
        <h1 className="font-bold text-zinc-200 text-5xl">
          {data.name || data.title || data.original_title}
        </h1>
        <p className="mt-2 text-zinc-200 text-sm">
          {data.overview.slice(0, 200)}...
          <span className="text-blue-600">more</span>
        </p>
        <div className="text-white mt-2">
          <i className=" text-yellow-300 ri-megaphone-fill"></i>{" "}
          {data.release_date}
          <i className=" text-yellow-300 ml-4 ri-album-fill"></i>{" "}
          {data.media_type.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Header;
