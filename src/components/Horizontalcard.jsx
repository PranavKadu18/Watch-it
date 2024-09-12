import React from 'react'
import { Link } from 'react-router-dom';

const Horizontalcard = ({data}) => {

    console.log(data);
    

  return (
    <div className='flex items-center justify-center flex-wrap p-8 gap-8'>
        {data.map((elem,idx) => (
            <Link key={idx} className='w-[13vw] h-[34vh] rounded-md overflow-hidden relative group'>
                <img className='relative w-[100%] h-[100%] object-cover z-10' src={`https://image.tmdb.org/t/p/original/${data[idx].poster_path || data[idx].profile_path}`} alt="" />
                <div className='w-[100%] h-[100%] absolute z-0 top-0 left-0 group-hover:z-20 pt-[60%] px-[10%]' style={{background : 'linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,1))'}}>
                    <h1 className='text-white font-semibold text-lg'>{data[idx].original_title || data[idx].title || data[idx].name || data[idx].original_name}</h1>
                    {data[idx].vote_average && <div className='flex gap-2 text-xs'>
                        <i class="text-yellow-400 ri-star-s-fill"></i>
                        <h1 className='text-white font-semibold'>{data[idx].vote_average}</h1>
                    </div>}
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Horizontalcard