import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncgetmovie } from "../store/actions/movieAction";
import { deleteMovie } from "../store/reducers/movieReducer";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetmovie(id));

    return () => {
      dispatch(deleteMovie());
    };
  }, [id]);

  const navigate = useNavigate();

  const { info } = useSelector((state) => state.movie);
  // console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.9)) , url(https://image.tmdb.org/t/p/original/${
          info.details.backdrop_path || info.details.poster_path
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
          src={
            info.details.poster_path
              ? `https://image.tmdb.org/t/p/original/${info.details.poster_path}`
              : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACUCAMAAADlP0YdAAAA8FBMVEX///8AAAD4+Pjp6enz8/NDQ0NPT0/T09P8/Pw3Nzdra2v//f/+//z8///a2tq4uLgvLy+hoaEcHBzqAACQkJDDw8MYGBiZmZn9ztF/f38jIyPKysrqlZTxU1T51dWurq5jY2P7vL5aWlpzc3PfAADxwcLnRUHpf37tZmYRERH6AADyAACHh4f1g4P0pKL4HSD88O3ujIzoLzPwIiLwmKLxMDL95+bYKyfkmpjppqHnHyTjMijrPEDiGRfscnPzzsPcf4PvoqntenHquLLaVFDvXlvvrbP5Uk7jbGTzbHXvhnzWVVzpxsngTVH439btfIXR2JZEAAAPoklEQVR4nO1dCXvaRhPe1bmgCyEJzA0SGIhkI8Cmses4sV0naZvj//+bb2aEbQ47TfK4iHz1tC5Cu7Ln1dx7lbEXeqEXeqEXeqEXeqEX+r8hgT/KBons/i9GgslOtbZOievIefP14yRYUOR8XF6jMefFIG/Ovk3iEbVxSjxy9A1yIl5y9lnHhEBt6gDp97Ygj8eust1TccfjPdcxH5WH83KRvgGcLk/Ylo3j14R3d8zbj5HDy1ECdl3iPn4VTOf1p/rWub7PKqbyzJrlcoU+FY136EKsMp1dd7i2rXn7QUKSWGmsSEisUFGEpNhdri05F9I93TkHjXdtRdqk3AUl2UHHdTv1sV8lKo1dt1or866c8a27K6Rnz8ghL9fcTeoEtpQfDsFsv8DJ3MucP1zUw+qdCiV8hZLlTbka1vk2FXyb5ZYNNDSu+R1nkwL7voe9ej+7jbzawdZDHR9+WSMfHKA9KvefTysk2+eq/ly/7cdIKXL/WdVb8nkxH+fWKavPrNhCLXee9zd+59+t8caj2dfP/0bW4LU8zF7u8mfXBgW9+O7J1tTnh6Jq9j/3enb670FRbL0RBA3d/q7OOULRA+lbAVppuIlWggygXNASt6E81RezTinQc4USlpKno5rkRJDXaBHkZ0mkQWYSOU/EIUCiJ6UwVyhOAVKnJ1RHj+pcdXVZhjRYkWXdVXk9egw4AFEgmSs4+dqK7JZ5qDymN50SVx15pUHIjspLnY0ihr4qkCy7cu5mb4f8sahf5XwpLlt3HD3jUPE5r272FEKEPKQOeUJBDJCLJVutCS9QYalHdzl8l3QrKGx2BqEklHuJ3KUCVYvKN2O0ywuQsAs95FwNI9+PQpXzUAduG4UtuchcXQLIHQrzs9GJBwrKFUCioB25S5Syi/YATzTKlY1hPf9eUPmHSLscrjVByeuSYajuirhkcGFoPh0ergsxrNz5tfyhiFJ9zfCrPBJMqm5VhVB1QoUjonUVE/XS3dP5Q2GlirTWUrFxbEzbCiK6xh1or6wxLJVLd5d7B8XFd6/US87mI4I5pbqC1eJqhSVV9haKHHGdbFmYJhMpsyzLNAVLmcnQSYOH0Hm0Yi17LBW9hPUTL+gAgp38NmCGYVjWYPaaARi9wLFqK63o3h5DcbgLmsQjgMDYWXw+wJuDuXeG0mERWItw+Yry7S8UycUBZOTYFIDlJL4YmGzwu/eakZ4hRhZwd+WBvYWi1DA8qmUb9Qv+ff3mote7eNNkzGAWxiAVvHKl9pBO7y8UuajqGGkUxGHCv69PZ7PZ65QJk7jFKKKrxQe732soNpPqdQaGYeE/6eWreJgyMH1qr9clyNp+FSg6k0p19Fckl0FrMm8NzCUSVi9Jv4xUorqOtiKjmQP/g4vT45P5xQANxcLZJLAVvR79ClAg9wIP1h1j+gsebPD7vGmazf6MsIDzGnfRg1V/BQ8mOhg0OrwGCmawwcxrmsw0Xk9mb7GR1TBpcXjnIf/cXyhQkICnlbkGGmawd94VQWLN/jvQOCZrUKYptfJKzrzHUOwuJsZdyOThzacHYPjgvCx2kGJjlXehx7i7wvEeQxFVzFxsnPdBd0yBEUOKRQ9xG/OW6kp9s7+ZsYDyXZWZ8Dk6XGOtJpOLWHXJamG1JtsrqWxUkVKCDCtFXpPXR1blGg2tVHmyWt7sTxUpRJZXrZBeGDfQZnhxrSJuFDnaSGNcWC8vMV/LKH8oLnjeNXI5jpHZEVf9e651X+WRLYBdHMNYpdr9jbyhoIPdqOKliHeVbPRILfpOEDh+Uc3GjpQuj6RVtcMFMeFSVXO3FZ+Hm41SSFNxQq7WaYHbmPN6FQeQ7ZCHW8sOw7txtFwHWgX43vHW4CTDFTwqGYqw3VqxWHNt4r4Bt7cnWWQ+zrxzrlIRusYrjy6CqHHwYGtMCxnvPTZd1BhzTc95zBgsexw+8dcdFRi3ZSVbgaTINgBRnWxR39YvC8fgE3KFovKw8+Qko+1rwHzSCYA6CVxryZNT2UonBNXLE0rH/eY8O9iJVsnmJCpaZi9PTlzKbidvD/b0pCpNvuhOh5Z7Ofp3TBHnAkX8B+ftf4hygiKHleeHUg7zWOMiIi4/9/JAGSdmciD38XD38yRYcTPT3BFBRfjMewUCnoupADllHjyjuSgBL2/NLu2K3AqvOY3N7RA/Rw2nxiv5qBeZidOF5L3wLATFQDc3mSAW3DlUfBaq+bnvOJLkZ6Icl7G/0J4STZlYprBoGgh+DMNiNKpqMGaYcA++LCdWLJo2wolVuoKOlpGN7S8/WHaNz+wciJkRzQhZy2u2xCSsjGu6SUipI4220hSlQQPJ5t0ALN2mGwR051BoNhvZJ1QCXy9e4BCxiUIhlmkYn+EYuEHM4kNGhhiB0Jy++fBiALC1eyj0JumtM8BBb5Vl6gLcZfzjrCp9ZsPgxLOVCc7M3gIq4YqGkU5m4HdJRpoKQ8BrTIknM10saN4BXzBwk0rMEpKUCovwSJJkGKZpQPc0NfESe8IzEjBvmPcbpQAYNe2UBsO/buBDOrtegOKnZ5ej0dENqRda9OKyubAWzb+O2viNLabX0zZJ5NNfR80F6B++i7PLW3gGOpi9o4ywydp5ot/sv/oDOE+vvbcWk96dx/1+PDumNwrMv/UO26z9IfaaZPY3k3jeI4UavopPb1CVLHN67vX73vkZY2nTi/se0OEXloOtNE8nbxbAxVF/YLHBm/Ov7bd/Ts7bxIrJDrwWQGlNJh9JKseT+WmPjOdwMplfEdr2m/nw7afL+HzBpOP49n2vd3MzSFkOttI8n8fvQcEQinXpXacW+/Lb5CQz9Dso80krRYUZzgkKID+dfQBJIZSp9zE1rbT16owZJ/EwtVgWknZvK8356eTPJRR418cojmvvzzUon+eTWRu+p6P5fNZDebUnreNXf6YoqY9xE93XED6kpvdXyoSBxHaOBGzl+nz2ZR3K0BvRBOS9VGYX5z1oaB+2JhmUq/jrQdz6gj53NGnSM/EQFMx7l5IvBvdn7F7BvOOP87M7KKD/4JWG8Yhi3D2U0+FkCvz2Tt/FM1KwI+8q/X1Ga8T+hiZgvXkxZdIJQaEgae3e7pvxcc+7vJfKFarV8NVoRcEsgDLwLtHqvR5BsYyR9yltoTMzAQpKxVp8ArNHW6FYyrIMYtdQmmn/sG3cKxizCApjq2a/8D4vmDjyFjGYPcSXlreQjuLXYgnFyJIG6bU3zeIrW2ZmO4Zywj6fn30bSl/MLw5YejlLPYLSPjxn4jg+wkWhtwDFXCBhXLk9fn92NQCXtnurB1s5gZ9h+m0o6Qjsvt0aMY+c8fvzz8zsebcL6IxSSZut29YxS08gPMaxN0qzImHXUEAqb+e37SPv4FtQjuMpG8yHrE9QmvE7EM35RRv4/RviS/r1jfdqyMTJpPV1Op1eoZfOQ8GaEN9Oz/4ByoF3bbz33hMUyHJi+O/idgIemo0wVKZfrsEZGyheSiazEiEHKOLKG156B+wbUBbebXs6OUAoFluMvAWkbUfeMSTMGFeApt4wC5EW1Tp5lF5Nr2kZ7XnrsD8w1qCsxpV+Kh22epcX7QxK+7MHLz9tgt2DVOZNXCc69N4hlHcABaoyw8wHCujK58lpf4BSuUInmkkFC/oHKMPz6w9gzuTBerM5UH+Cdk9mD7o0BFsxTsgZm1TQ5GH2TQszjjlCacXHqONfY1Iwa0Uq1nH84bQpWQTleDL7owU0BzGxESRf+MyrKUplis7LzCOqLKFYg8mkD7YymkxRM0aTr1R6rUIZvJlPzgRBMaZxsw108yEG+Jdg7yxDhAqm3JXY+UCBoqMVexBXml7rwJBuzic3m7bCFoeTU2AcoSzQRQDDi4/xmQmZ5eFNKm5O+28RyrBN0RLfw+4VzENVT6eed2CyL4dxazicxSNKP9akko6woCRn3G69+YJQ4KGpBBjjD8PhhQe1qNSMT29HQNNFDlZP0R6UodfvD0xmDloYr/9eZONaAAXSM6t94UkW8D2C233IIQfnn1MaJjvu/wEOa/A5hoewERIXpBhB51BFLgYLzJfSgwEOubDFwfteO71/p+mgDQI5QM4WBwuoIwcHKfRtC+qBFxa29Hq0PNRctJeU5iGVNfqZv583z/8R+onYlsNI0ffQz7C1p1B+Zcr9IKx/lZ71jJpdkpP4uKBC9rNNwY2EvlUTOhFQBInOJP/+gC2muEmVZoHtxAfCqW3JqS3nhRt4y0++vVTuX6QwO/RLrldIFgmtFAnqvIQMSVXuMGlcumdOLixXjAa0bq8e0Zr35RJll84VzG1lCOMVXP/MWIkTBxF9dOAufm5B0ccV7iDmgBcD3eXY/ACFJw0gPZc5b8FkHhZoAVeR9jfLYVnCbfYq7d/ehuJwrZwoBMUX2YkBq1ByOYQqI4Fbtoq0f8MlPdNVXNgtd6NkjKu5N6GIqupr3SUUidG+1TUo2SreHJAw3L3RyPabN2gpu1P2cdtEwXcKmtiGonTDoEvfAo7CeRxKThRy2aETDRSuSsgN6pXOXVmrS9tQ5FIk18iKMql0uL8FJTc0hRIeToYqUy/ZTCTEpwMAurhKfxOKDVpYzXwcT2TF1sb6vtgK+OCQ2WPadxqWHaZEGYBSg9WQ400oAXdBEriPIOBqFJFvWIUS4XLknA4KDcZV8Fp0KiEebmBruA1FKYY2HumwDcWvBywodSWEUq+XOfXZiCtqThHSh3evJONMZSLWKKExy5VIgSjZ3YQiWFe1cfsKQanZstwFKa1Kxdd1Pa8TQWuoUJ0spPBQZFtQZXzZMh7bsCmVcSjhXjb5zuxtcHt7YitKCPyC3VfxINmyZrvEVUAsafDyN6AotCEMJbmEInFN7IkzttVKGIZadiihVnJ83KQKPkqFmyXe2IQS8AJ0VzGY7h2UoFBSgUAeYAj+OIkwhxHhGG/iGU0bUHyODepYe4CiKnsCxYVYKMt2xDF1CbimYoQRYw0sWu6gHSyhLP1rWA+goYFWlOVgNtfQVux7KLkhYRkXokox3uZ13Dl8t6re5qUllErJwYxXYZw2Vki4sxv8XdAIulk62cFm9N9J0GgE37PL5dkJnBH92Q5pi8w5QXKyA7KkylgmkBLn5TqQreDB0wx3fAdYr9TrHPcYAxRqroKNjeGz8tTGsX+RIMPvZCcZ2D6eW6hU/Spy0fCz7Xiub0MVaUMVmZEsY9WIq6yh7lxWkZgbOFlzsKwi/U4umz4UaeVTSIpEp0dmG+7oE3/u/rcSWTfqAG46u5U9RnR3T8kjRG67G0EbPsXDN7aycfCu5Qkv9ZAU55npP/xtsTbc8vjl40//oqM0L/RCL/RCL/RCvwT9DwmtjuwWHgZkAAAAAElFTkSuQmCC"
          }
          alt=""
        />
        <div className="pl-12">
          <div className="flex items-end gap-1">
            <h1 className="font-bold text-4xl">
              {info.details.title || info.details.original_title}
            </h1>
            <h1 className="font-semibold text-xl">
              ({info.details.release_date.split("-")[0]})
            </h1>
          </div>
          <div className="flex mt-3 text-sm items-center">
            <i className=" text-yellow-400 ri-star-s-fill"></i>
            <h1 className="ml-1 text-white font-semibold">
              {info.details.vote_average}
            </h1>
            <h1 className="ml-3 font-semibold text-md">User Rating</h1>
            <h1 className="ml-3">{info.details.release_date}</h1>
            <h1 className="ml-3">
              {info.details.genres.map((o) => o.name).join(", ")}
            </h1>
            <h1 className="ml-3">{info.details.runtime}m</h1>
          </div>
          <h1 className="italic text-lg mt-3">{info.details.tagline}</h1>
          <h1 className="font-semibold text-2xl mt-3">Overview</h1>
          <p className="text-sm mt-1">{info.details.overview}</p>
          <h1 className="text-md mt-3">
            Country : {info.details.origin_country.map((c) => c)}
          </h1>
          <Link
            to={`/movie/details/${info.external_id.id}/trailer`}
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

      {info.recommendations.length > 0 ? (
        <div className="box w-full mt-4 min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
          <h1 className=" text-slate-100 font-bold text-2xl ">Recommended</h1>
          <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
            {info.recommendations.map((elem, idx) => (
              <Card key={idx} type={"movie"} info={elem} />
            ))}
          </div>
        </div>
      ) : info.similar.length > 0 ? (
        <div className="box w-full mt-4 min-h-[38.5vh]   pb-7 overflow-x-auto overflow-y-hidden">
          <h1 className=" text-slate-100 font-bold text-2xl ">Similar</h1>
          <div className=" relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible ">
            {info.similar.map((elem, idx) => (
              <Card key={idx} type={"movie"} info={elem} />
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

export default MovieDetails;
