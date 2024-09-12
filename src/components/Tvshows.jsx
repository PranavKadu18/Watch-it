import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Horizontalcard from "./Horizontalcard";
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {

    const navigate = useNavigate();

    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page,setpage] = useState(1);
  
    const gettv = async () => {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      settv((prevdata) => ([...prevdata,...data.results]));
      setpage(page + 1);
    };
  
    const handle = () => {
      settv([]);
      setpage(1);
      gettv();
    }
  
    useEffect(() => {
      handle();
    }, [category]);

    return tv.length > 0 ? (
        <div className="w-full min-h-screen bg-[#1F1E24] px-10">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="text-white ri-arrow-left-line cursor-pointer"
              ></i>
              <h1 className="text-xl w-[8vw] text-zinc-300 font-semibold">
                TV-Shows
              </h1>
            </div>
            <Nav />
            <Dropdown
              title="Category"
              options={["on_the_air", "popular","top_rated","airing_today"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
            <div className="w-[2%]"></div>
            
          </div>
    
          <div className="w-full min-h-screen">
            <InfiniteScroll
             dataLength={tv.length} 
             loader={<div>Loading...</div>}
             next={gettv}
             hasMore={true}
             >
              <Horizontalcard data={tv} />
            </InfiniteScroll>
          </div>
        </div>
      ) : (
        <Loading />
      );
}

export default Tvshows