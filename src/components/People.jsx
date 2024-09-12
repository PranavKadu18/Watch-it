import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import axios from "../utils/Axios";
import Horizontalcard from "./Horizontalcard";
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {

    const navigate = useNavigate();

    const [person, setperson] = useState([]);
    const [page,setpage] = useState(1);
  
    const getperson = async () => {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      setperson((prevdata) => ([...prevdata,...data.results]));
      setpage(page + 1);
    };
  
    const handle = () => {
      setperson([]);
      setpage(1);
      getperson();
    }
  
    useEffect(() => {
      handle();
    },[]);

    return person.length > 0 ? (
        <div className="w-full min-h-screen bg-[#1F1E24] px-10">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <i
                onClick={() => navigate(-1)}
                className="text-white ri-arrow-left-line cursor-pointer"
              ></i>
              <h1 className="text-xl w-[8vw] text-zinc-300 font-semibold">
                Actors
              </h1>
            </div>
            <Nav />
          </div>
    
          <div className="w-full min-h-screen">
            <InfiniteScroll
             dataLength={person.length} 
             loader={<div>Loading...</div>}
             next={getperson}
             hasMore={true}
             >
              <Horizontalcard data={person} />
            </InfiniteScroll>
          </div>
        </div>
      ) : (
        <Loading />
      );
}

export default People