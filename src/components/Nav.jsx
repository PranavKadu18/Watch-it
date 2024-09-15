import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [val, setval] = useState("");
  const [search, setsearch] = useState([]);


  const getsearch = async () => {
    const { data } = await axios.get(
      `/search/multi?query=${val}`
    );
    setsearch(data.results);
    
    
  };

  useEffect(() => {
    getsearch();
  }, [val]);

  return (
    <div className="relative w-full mt-1 h-[9vh] flex items-center justify-start pl-[10%] gap-4">
      <i
        className={`ri-search-2-line text-2xl ${
          val.length > 0 ? "text-blue-500" : "text-zinc-400"
        }`}
      ></i>
      <input
        onChange={(e) => setval(e.target.value)}
        value={val}
        className="w-[50%] font-semibold p-1 px-4 outline-none border-zinc-400 border-[1px] bg-transparent rounded-full text-[#6556CD]"
        type="text"
        placeholder="Search here"
      />
      {val.length > 0 && (
        <i
          onClick={() => setval("")}
          className="ri-close-circle-line text-zinc-400 text-lg"
        ></i>
      )}

      <div className="w-[48%] max-h-[38vh] z-50 bg-white absolute top-[90%] overflow-auto rounded">
        {search.map((elem,idx) => (
          <NavLink to={`/movie/details/${elem.id}`} key={idx} className="inline-block flex gap-8 items-center  font-semibold w-full p-4 bg-zinc-300 text-sm border-b-2 hover:bg-[#8e83d8]">
          <img className="w-[20%] h-[20%] object-cover rounded-sm" src={elem.backdrop_path ? `https://image.tmdb.org/t/p/original/${elem.backdrop_path}` : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAxlBMVEX////+/v4AAAD29vYkJCR+fn7g4OCRkZE2Njb8///5AADw8PDV1dWWlpb7+/sQEBCzs7Pq6uofHx++vr7ExMT9zs76vbiGhob6paMuLi6dnZ382Nk+Pj4pKSlxcXGrq6tfX19OTk5XV1f7LS5GRkb5YmL+7en6QD/9trL6gYQXFxf1q6j5j45nZ2f33+D98fL5V1v8bWX5ExX4qrD8/PP6dG/4HCL7YFf7hHvx//r718703c/5opPwREn7nZ37T037a3H8uL0UJrYRAAAMMUlEQVR4nO2cCXuiTBKA+1CkARsQjPECxfsCxzFMnN3RL///T21Vo0YzZvfZSdB8u9aTqEAjb6qrqq/qEHKXu9zlLne5y13ucpe73OUud/lfEkoo/rwKnPmC8haKfklKwrVT4bfGAaES61S9qUNK3GK9fSr1ontzdQLe4QO+UOpVKsXyqRQrU+/WmPB0zfE8T9ubo8W61jmRtLrMugXamZTZFKTiSHUU1TUAO7kMn7V25yZkhOxjDSEeC3yQjm0RddRQaPsa3kehBsM6p+d3vzmTF2T2ocFcfNOYA6+WXjAvFDYL+qU6vw4lt7zQC+zQAQlZzQsXrK40SjznIB6WJVadLULnVDyLX4VSOh0GYheYkoLNWKumZY+22UFsVZZotRZ7Ix2w5Pw9v8wqjnUu7sFttOMpbX9Gum/KOgVWzp2RQBV/rFXhNRZ+Esu7orW6qsIyR9+/HSL8oSmiJ278ttMBJtNtaSRHgWd7zL9w/r/6EuJDgMrRNOGba+zjvQjOajlTFgv/jpJe+PS78EIxT0p5pHyvj0u5abqmyS9f3LMhZb4xEyg5BGYp5XnLpzpy3C93phASp52yh8FbyrdlJDQJXOkyVwFKv9LxyTkBxecTDPf9WrlRrvUxeJ/7Oslu8TtT/yqU0mmxrnle4xLbctZ1Dq256XQZtuHnfwoxu6zlyKtQEuI27Og85FESTluK0dQsTb07rWn4xvy0yG64e+/JnZJiyAtefR1RQtaF50svaNUL9VbggXLdLjYyJ5w8gGCL5nslSgodt2N0RwyHFTnhHthlsRyWi2CX4D68CN26k2DgQyeUXo0S3dvVF0dK6PoUugoq8lSnk7hepLC7Be3Efhe6e0VKfK4s1g9VDocdphEZsdLrkEKWWCSJyzqv8ZvXi9n1K3kPStk++LOExj0EbOy1C8VE4R2NQIK5esfRkGnvu2w3oSS003eBtJTRKUHaEhC6/c5RvzehnB4prUoJTFAHU5BxgpwiiSFQch2MtVQ5jnxurMsQxt2+GqXF6TIRVCTLVUywzn0Ypx+7vLelpLWKCTpDb14/Gk8JSZ6MRwxAGujYrNQO3nNbSrMTEdJfqAglHoxBPDBehIADvugTEnWO5W5L2YXQmUWZtRCzdJTOiFhjl6hYhyDZ/RqUbjcgtK0oJdqksk11VGxTEnTdL0FpRh1CdNWuC5r8WD2vfiQCXZ0HOgT86GvokgdofgpGcHCcDbgQFwofDfbYLblxJCoxV0UjSpJvxgxOzIxvCc6/QBRyIdh/DUoPYqWGTY8YDmbqzGwwFNj4aBAzvS9CqdXBfQJAojIRGzixEQm0PRoLwHnqB+e5dVSHkxagRtBEriWGcypBkxwnXq12kdwyqpemr30iF7XmsYVLyL5PBPFpgV1gpeHsTyHmtHRtSh60ToY0ZbS+BtOPtUu0Fs4Oe6fza1Tfu/v1KC2cRdk/XRJzgQMMv88WnmaapuYtWB9PsIV5HEaiN1lXpozs10EkDil0Hajcks7qURTVmV4Ctfq6rh1HZ7ioYUdXpYTxQuN8QK5VbOy6uX6tE3VKPla9Y1fOhsMSbKLEr0bJPZ01zidXYLgWsMh/Hf1yP2KBS95MwYDpeuZ1KLWA6Q4hbzF5w2aLhqVmDKxGwOzGm3l+PHB0ttBypsxmBq1ueHl20A31qV1p19sVe6qH7sUyPOxaV6Bs8+MM39urlEgrLBWDYim03lmHkHgrb+de40BJ1Azb75BZ/UouTw/PJZtAzJ+ywlUT+PuVbHbwsMKX8VygRF1W8q1xeljY+5C4ar7oE3gui5ps++hiDYW+qJ/rjDXF2b2PLHojnIWzirlCYiPT9z6ymMK9flsjea5RKLEqLKqV/lRqEavkn4GgGplOS/9TaXXeNkn5cWp/LC6/Rq7BXf4fhWYLD9kqucgWxPdrEVQcy2QiTg7o75fzEkEEjGMFvAh8E2pGCGnxeC0UNJRRZ9U5uCSFxDlsmd2ABbJyuUkSD7mkMo5xsnJYrQ4PlAlOVjezGWvZjHEuWPC4ORRISWizGiN7EmeSM2XVMGbwsNGSb/jcAJmruTYh5nAeLj4j5U/DeMLCY3xHBf5jBCVH/xDin4aSp9e6z4kynUjBl4NEzIxfs8dfxgNBXYpH40E0jXQJShLfV6sJFt6m6Y7DX5AsV8/jZwPueTGW2/l8/pKnLuGbq6t0F5NkN5Dim9EkoL4dXhEko+z1cPZ/nipKOentUjSJajrgYv2t1wTtbkWWgnahh/qJlMYOcJByPepxQZKRcUo5WjUFTQY9RTn8sdwaVaAer+bgQfPVg6JUHpRn/xIp5+mzGO4pyWZ4TrnEOfV4N0iRstmbjI1HYHoBSiEmxlgAZfZNOdqlohz/teLJr4HkSpdvKOejCVTwaraaiDWUfWmmf4HiUJdiUx3HYJdbjGG5OnhGOTaqWOMXKR93ykUejAmQPBrNGILBnlJgJPp+qPG8KWdQkWT5DuXD0ygW895PpBTPqyRZ9uKMkld/QnB9MJbz+WScn+scKflyl7xH+fKYVsVyMDRQebuRJJNVlShKiKVQYrbqpT2IZflTknn68B7lGH5kuh2CLkViQGTd4nIAUg63g/QFvGceN5tx/nY5g9/ndykTYxsb1diYEDiCVgpiwsEut6sXtEu1wnYFyvVoNBpIeZFS7HYv4DSoy8fVY7NZXQ0SRUmP8VLm2zoeKOF5qdIltDPD3RnlTEx6k90QKcnEWK1W6WoXYz0jpaEooQlXvaN8Kb8T8dMASrpLoeqGo9Up5Xeo096TVDW+HG0fHx9/pU1oeyZZ2yMObc/FmabPpST812ogNxNjJuXY+HZKif2idEtQl/HoL+TZghU0ez9iOfzRU1FdJiB5jtAOuuQTYymBp/f01DOq55TxaDVWlNUUFajcZ/1kLCdL44luxsbu22Aw2G5kvv3LdAzPro6ewLKqy7T3q7rve3+HONNMH2gyGf0UcW8uxqMx3hCPfhCxnkCYnICBvIx24Hq9+Ubm6+ZrHBVIjh00wofxOhv3SMoTUBz+qg9rLuQaTW8j1gmqFLvycCdfJ2vO8e5cdYmmJsUawsmGbgRA7Ck3FJNzsMe7OY6ANqo8FMQekFCDnU3m25enYD9P1ANxcAZRD4dk2RgSDtUwjFPFBNfk3otxkKkuqVcihSoIf2CujeSfyN9jwuXvQXkLkWHZg1enoTadNEwCLw0Xk5xKGvEb2QwsJU4Dcy/hrdEINWgIGr5SqQ/HjbKfu4L5FNMVZZFhanCt4OKSs41pDx7zVApHtr1mynQEXjDbZnWNmHaW1liGY5vVcp7CxESHdsvNktsIXUQUM8jsUFH6R0pCmK5WfQPdMkMWYCaZomwwy9U0M/c5TK++aFtE5VyqhCdiRotWbb/F4kipsaCCOblByyRmt3tCqdZ5ab4tJCG1Bea8EA0XwKxKiOsBXtDiZ7rEZVGvXjtQds4przEXHBU1zHMw+wtMYrUwo0ArgZGeU9YirRUcKPudc13mjynbDalS7xZ9zHUCutB2fWadU8ooyHLHgpalYVLrKeXlXRafKlbFI5hhq7JUi33cABJxlQv6SgkGq4ekhlskA9xqBoBHSrvdrgQfWTD6j6Iy0wEOU0JxL5HsY7ZQpShV7Z5S+vBZbVgKdMcrgYW86rJYLjl5j3RJuU0VA3FZyEGFlMALX7TOKR0wBRcVHPRNIoO2vKL3UJUg6GqYxE94O7DQHDUWulqxYJ5SUnAnzZrWKHoPhVDuXpOSEjdi9UIBWh8K1ukgpcMq7fZ0ap1S8gBKtVmXKx//nTJXTvhyUJDveREjmEOm8lRLdcf3G7azp1R5ZWZr4Xv+wt5T1pgJlCSjzJSd9/o4rnWWGEU7rOBeic4CPruVUkZp+5bl82z3Lqo60H3LKUC8LAS4ZxMoccunluc/PaAHXYQqYQxCDFVtENDbHY5NUkltcrXQvbIV/wUeQ1hws82x+wK57jvDGvcxIcPEvSfc96HDZvrK0ECBLpzUcLe2b2oq/4n7FpT3fQssUqoL/r6AdTHz49Mo1XqZzPaTqq0p2Ucp90tpv93xznuenQ1J97vUz/+xBlUDsuMrOaTy7E+qxBeZ/QOOw3WS4xpFpjlCjpjkBFgeGF5ZDhlGWRWoohkdvfW/ZbjLXe5yl7vc5S53uctd7nKXu/yB/AtFWg85RGjqTgAAAABJRU5ErkJggg=="} alt="" />
          <h1>{elem.original_title || elem.title || elem.name}</h1>
        </NavLink>
          
        ))}
      </div>
    </div>
  );
};

export default Nav;
