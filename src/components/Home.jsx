import React, { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Nav from "./Nav";
import Header from "./Header";
import axios from "../utils/Axios";
import CardHolder from "./CardHolder";
import Loading from "./Loading";

const Home = () => {
  const [header, setheader] = useState(null);
  const [card, setcard] = useState(null);
  const [mov, setmov] = useState(null);
  const [tv, settv] = useState(null);

  const getheader = async () => {
    const { data } = await axios.get(`trending/all/day`);
    let randomdata =
      data.results[(Math.random() * data.results.length).toFixed()];
    setcard(data.results);
    setheader(randomdata);
  };

  const getmovie = async () => {
    const { data } = await axios.get(`/trending/movie/day`);
    setmov(data.results);
  };

  const gettv = async () => {
    const { data } = await axios.get(`/trending/tv/day`);
    settv(data.results);
  };

  useEffect(() => {
    !header && getheader();
    !mov && getmovie();
    !tv && gettv();
  });

  return header && card && mov && tv ? (
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Sidenav />
      <div className="w-[80%] h-full overflow-y-auto">
        <Nav />
        <Header data={header} />
        <CardHolder data={card} movie={mov} tv={tv} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
