import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncgetperson } from "../store/actions/personAction";
import { deleteperson } from "../store/reducers/personReducer";
import Loading from "./Loading";
import Card from "./Card";
import Dropdown from "../components/partials/Dropdown";

const PersonDetails = () => {
  const { id } = useParams();

  const [type, settype] = useState("movie");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetperson(id));

    return () => {
      dispatch(deleteperson());
    };
  }, [id]);

  const { info } = useSelector((state) => state.person);
  console.log(info);

  return info ? (
    <div className="bg-[#1F1E24] w-full min-h-screen px-36 text-white relative">
      {/* nav */}
      <div className="w-full h-[10vh] flex items-center gap-8 py-6">
        <i
          onClick={() => navigate(-1)}
          className="text-white ri-arrow-left-line cursor-pointer"
        ></i>
      </div>

      {/* image & details */}
      <div className="flex w-full min-h-[50vh] pb-10 text-white">
        <div className="w-[14vw] h-fit">
          <img
            className="w-[100%] h-[38vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
            src={
              info.details.profile_path
                ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`
                : "data:image/png;base64,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"
            }
            alt=""
          />
          <hr className="mt-8 border-zinc-200" />
          <div className="mt-4 flex gap-6">
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.external_id.facebook_id}`}
            >
              <i className="font-2xl ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.external_id.instagram_id}`}
            >
              <i className="font-2xl ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://x.com/${info.external_id.twitter_id}`}
            >
              <i className="font-2xl ri-twitter-x-line"></i>
            </a>
          </div>
          <h1 className="mt-4 text-md text-zinc-200 font-semibold">
            About {info.details.name}
          </h1>
          <h1 className="mt-4 text-sm font-semibold text-zinc-250">
            Known For
          </h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.known_for_department}
          </h1>
          <h1 className="mt-2 text-sm font-semibold text-zinc-250">Gender</h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.gender == 2 ? "Male" : "Female"}
          </h1>
          <h1 className="mt-2 text-sm font-semibold text-zinc-250">Birthday</h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.birthday}
          </h1>
          <h1 className="mt-2 text-sm font-semibold text-zinc-250">Deathday</h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.deathday ? info.details.deathday : "Fucking Alive"}
          </h1>
          <h1 className="mt-2 text-sm font-semibold text-zinc-250">
            Place of Birth
          </h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.place_of_birth}
          </h1>
          <h1 className="mt-2 text-sm font-semibold text-zinc-250">
            Also Known As
          </h1>
          <h1 className="mt-1 text-xs font-semibold text-zinc-400">
            {info.details.also_known_as.map((a) => a + ", ")}
          </h1>
        </div>

        <div className="pl-12 w-[60vw] min-h-screen">
          <h1 className="text-5xl font-black text-zinc-300">
            {info.details.name}
          </h1>
          <h1 className="text-md mt-4 font-semibold text-zinc-300">
            Biography
          </h1>
          <p className="mt-4 text-zinc-400 text-xs">{info.details.biography}</p>

          <div className="box w-full min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
            <h1 className="text-slate-100 font-bold text-2xl mt-8">
              Worked In
            </h1>
            <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
              {info.combcred.map((elem, idx) => (
                <Card key={idx} type={"tv"} info={elem} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h1>Acting</h1>
              <Dropdown
                title={"Category"}
                options={["movie", "tv"]}
                func={(e) => {
                  settype(e.target.value);
                }}
              />
            </div>

            <div className="mt-8 w-[100%] h-[50vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] bg-zinc-600 p-1 rounded-md overflow-y-auto">
              {type === "movie"
                ? info.moviecredits.map((e, i) => (
                    <Link
                      to={`/movie/details/${e.id}`}
                      className="h-[10vh] w-full mb-1 bg-[#1F1E24] hover:bg-[#6556CD] flex flex-col justify-center pl-8 text-zinc-300 text-sm rounded-md"
                    >
                      <h1>{e.title || e.original_title}</h1>
                      <h1>{e.character}</h1>
                    </Link>
                  ))
                : info.tvcredits.map((e, i) => (
                    <Link
                      to={`/tv/details/${e.id}`}
                      className="h-[10vh] w-full mb-1 bg-[#1F1E24] hover:bg-[#6556CD] flex flex-col justify-center pl-8 text-zinc-300 text-sm rounded-md"
                    >
                      <h1>{e.name || e.original_name}</h1>
                      <h1>{e.character}</h1>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
