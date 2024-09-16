import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Horizontalcard from "./Horizontalcard";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);

  const getmovie = async () => {
    const { data } = await axios.get(`/movie/${category}?page=${page}`);
    setmovie((prevdata) => [...prevdata, ...data.results]);
    setpage(page + 1);
  };

  const handle = () => {
    setmovie([]);
    setpage(1);
    getmovie();
  };

  useEffect(() => {
    handle();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-full min-h-screen bg-[#1F1E24] px-10">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="text-white ri-arrow-left-line cursor-pointer"
          ></i>
          <h1 className="text-xl w-fit text-zinc-300 font-semibold">Movies</h1>
        </div>
        <Nav />
        <Dropdown
          title="Category"
          options={["now_playing", "popular", "top_rated", "upcoming"]}
          func={(e) => {
            setcategory(e.target.value);
          }}
        />
        <div className="w-[2%]"></div>
      </div>

      <div className="w-full min-h-screen">
        <InfiniteScroll
          dataLength={movie.length}
          loader={<div>Loading...</div>}
          next={getmovie}
          hasMore={true}
        >
          <Horizontalcard data={movie} type={"movie"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
