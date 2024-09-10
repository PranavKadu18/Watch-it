import React from 'react'

const Card = ({info}) => {
    console.log(info);
    
    
  return (
    <div className='w-[13vw] h-[34vh] shrink-0 hover:z-50 transition-all ease-in-out duration-700  rounded-md hover:scale-150 bg-[#16181F] overflow-hidden relative group'>
        <img className='w-[100%] h-[100%] z-20 absolute transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0' src={`https://image.tmdb.org/t/p/original/${info.poster_path}`} alt="" />
        <div className='z-30 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
            <img className='w-full h-[50%] object-cover' src={`https://image.tmdb.org/t/p/original/${info.backdrop_path}`} alt="" />
            <button className='mt-2 ml-3 px-12 py-1 text-zinc-900 bg-white rounded-lg font-semibold text-[9px]'>Watch Now</button>
            <h1 className='mt-2 ml-2 text-white text-[10px]'>{info.title || info.original_name}</h1>
            <p className='mt-2 ml-2 text-white text-[8px]'>{info.overview.slice(0,90)}...<span className='text-blue-600'>more</span></p>
        </div>
    </div>
  )
}

export default Card