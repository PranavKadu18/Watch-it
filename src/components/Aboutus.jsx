import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen px-36 bg-[#1F1E24] pt-4">
      <i
        onClick={() => navigate(-1)}
        className="text-white ri-arrow-left-line cursor-pointer"
      ></i>
      <h1 className="text-6xl mt-4 font-black text-zinc-300">About Us</h1>
      <p className="text-lg font-semibold text-zinc-400 mt-3 leading-10">
        Welcome to our movie and TV show platform, your go-to destination for
        discovering the latest and greatest in entertainment! Our site is built
        to provide you with all the essential information you need, powered by
        data from The Movie Database (TMDB) APIs.
        <br className="mt-2" />
        Our mission is to make it easy for movie and TV enthusiasts to explore
        content, read reviews, and stay updated on what's trending. We've
        utilized advanced technologies like Redux for efficient state management
        and implemented smooth routing for a seamless browsing experience.
        Whether you're searching for your favorite actor or the next big
        release, we've got you covered! <br />
        Dive in and start exploring the world of entertainment with us!
      </p>
    </div>
  );
};

export default Aboutus;
