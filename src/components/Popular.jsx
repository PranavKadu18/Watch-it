import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Horizontalcard from "./Horizontalcard";
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    const navigate = useNavigate();

    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page,setpage] = useState(1);
  
    const getpopular = async () => {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      setpopular((prevdata) => ([...prevdata,...data.results]));
      setpage(page + 1);
    };
  
    const handle = () => {
      setpopular([]);
      setpage(1);
      getpopular();
    }
  
    useEffect(() => {
      handle();
    }, [category]);
  
    return popular.length > 0 ? (
      <div className="w-full min-h-screen bg-[#1F1E24] px-10">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <i
              onClick={() => navigate(-1)}
              className="text-white ri-arrow-left-line cursor-pointer"
            ></i>
            <h1 className="text-xl w-fit text-zinc-300 font-semibold">
              Popular
            </h1>
          </div>
          <Nav />
          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => {
              setcategory(e.target.value);
            }}
          />
          <div className="w-[2%]"></div>
          
        </div>
  
        <div className="w-full min-h-screen">
          <InfiniteScroll
           dataLength={popular.length} 
           loader={<div>Loading...</div>}
           next={getpopular}
           hasMore={true}
           >
            <Horizontalcard data={popular} />
          </InfiniteScroll>
        </div>
      </div>
    ) : (
      <Loading />
    );
}

export default Popular