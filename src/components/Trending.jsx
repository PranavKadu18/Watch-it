import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Horizontalcard from "./Horizontalcard";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("all");
  const [time, settime] = useState("day");
  const [trending, settrending] = useState([]);
  const [page,setpage] = useState(1);

  const gettrending = async () => {
    const { data } = await axios.get(`/trending/${category}/${time}?page=${page}`);
    settrending((prevdata) => ([...prevdata,...data.results]));
    setpage(page + 1);
  };

  const handle = () => {
    settrending([]);
    setpage(1);
    gettrending();
  }

  useEffect(() => {
    handle();
  }, [time, category]);

  return trending.length > 0 ? (
    <div className="w-full min-h-screen bg-[#1F1E24] px-10">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <i
            onClick={() => navigate(-1)}
            className="text-white ri-arrow-left-line cursor-pointer"
          ></i>
          <h1 className="text-xl w-fit text-zinc-300 font-semibold">
            Trending
          </h1>
        </div>
        <Nav />
        <Dropdown
          title="Category"
          options={["all", "movies", "tv"]}
          func={(e) => {
            setcategory(e.target.value);
          }}
        />
        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["week", "day"]}
          func={(e) => {
            settime(e.target.value);
          }}
        />
      </div>

      <div className="w-full min-h-screen">
        <InfiniteScroll
         dataLength={trending.length} 
         loader={<div>Loading...</div>}
         next={gettrending}
         hasMore={true}
         >
          <Horizontalcard data={trending} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
