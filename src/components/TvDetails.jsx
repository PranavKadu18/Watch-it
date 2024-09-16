import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncgettv } from "../store/actions/tvAction";
import { deletetv } from "../store/reducers/tvReducer";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";
import S from "./S";

const tvDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgettv(id));

    return () => {
      dispatch(deletetv());
    };
  }, [id]);

  const navigate = useNavigate();

  const { info } = useSelector((state) => state.tv);
  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)) , url(https://image.tmdb.org/t/p/original/${
          info.details.backdrop_path || data.poster_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="w-full min-h-screen px-36 text-white relative"
    >
      {/* nav */}
      <div className="w-full h-[10vh] flex items-center gap-8 py-6">
        <i
          onClick={() => navigate(-1)}
          className="text-white ri-arrow-left-line cursor-pointer"
        ></i>

        <a target="_blank" href={info.details.homepage}>
          <i className="ri-logout-circle-r-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.external_id.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.external_id.imdb_id}/`}
        >
          <FontAwesomeIcon className="text-xl" icon={faImdb} />
        </a>
      </div>

      {/* card & side */}
      <div className="flex w-full min-h-[50vh] text-white">
        <img
          className="w-[17vw] h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${info.details.poster_path}`}
          alt=""
        />
        <div className="pl-12">
          <div className="flex items-end gap-1">
            <h1 className="font-bold text-4xl">
              {info.details.name ||
                info.details.title ||
                info.details.original_title ||
                info.details.original_name}
            </h1>
            <h1 className="font-semibold text-xl">
              ({info.details.first_air_date.split("-")[0]})
            </h1>
          </div>
          <div className="flex mt-3 text-sm items-center">
            <i className=" text-yellow-400 ri-star-s-fill"></i>
            <h1 className="ml-1 text-white font-semibold">
              {info.details.vote_average}
            </h1>
            <h1 className="ml-3 font-semibold text-md">User Rating</h1>
            <h1 className="ml-3">{info.details.first_air_date}</h1>
            <h1 className="ml-3">
              {info.details.genres.map((o) => o.name).join(", ")}
            </h1>
          </div>
          <h1 className="italic text-lg mt-3">{info.details.tagline}</h1>
          <h1 className="font-semibold text-2xl mt-3">Overview</h1>
          <p className="text-sm mt-1">{info.details.overview}</p>
          <h1 className="text-md mt-3">
            Country : {info.details.origin_country.map((c) => c)}
          </h1>
          <Link
            to={`/tv/details/${info.external_id.id}/trailer`}
            className="px-4 py-1 mt-4 w-fit bg-[#6556CD] rounded-md flex items-center gap-2"
          >
            <i className="ri-play-fill"></i>
            <h1 className="text-sm text-bold">Play Trailer</h1>
          </Link>
        </div>
      </div>

      {/* kuta bagu shakto */}
      <div className="flex flex-col gap-4">
        {info.watchprovider && info.watchprovider.flatrate && (
          <div className="w-full pt-8 text-sm">
            <div className="flex items-center">
              <h1>Available on Platform: </h1>
              {info.watchprovider.flatrate.map((elem) => (
                <img
                  className="w-[3vw] h-[3vw] rounded-md ml-3"
                  src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchprovider && info.watchprovider.buy && (
          <div className="w-full pt-1 text-sm">
            <div className="flex items-center">
              <h1>Rent: </h1>
              {info.watchprovider.buy.map((elem) => (
                <img
                  className="w-[3vw] h-[3vw] rounded-md ml-3"
                  src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                />
              ))}
            </div>
          </div>
        )}

        {info.watchprovider && info.watchprovider.rent && (
          <div className="w-full pt-1 text-sm">
            <div className="flex items-center">
              <h1>Buy: </h1>
              {info.watchprovider.rent.map((elem) => (
                <img
                  className="w-[3vw] h-[3vw] rounded-md ml-3"
                  src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="box w-full min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
        <h1 className="text-slate-100 font-bold text-2xl mt-8">Seasons</h1>
        <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
          {info.details.seasons.map((elem, idx) => (
            <S data={elem} />
          ))}
        </div>
      </div>

      {info.recommendations.length > 0 ? (
        <div className="box w-full mt-4 min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
          <h1 className=" text-slate-100 font-bold text-2xl ">Recommended</h1>
          <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
            {info.recommendations.map((elem, idx) => (
              <Card key={idx} type={"tv"} info={elem} />
            ))}
          </div>
        </div>
      ) : info.similar.length > 0 ? (
        <div className="box w-full mt-4 min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
          <h1 className=" text-slate-100 font-bold text-2xl ">Similar</h1>
          <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
            {info.similar.map((elem, idx) => (
              <Card key={idx} type={"tv"} info={elem} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[38.5vh] flex items-center justify-center">
          No Information Available
        </div>
      )}

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default tvDetails;
