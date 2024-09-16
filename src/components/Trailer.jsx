import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from './partials/NotFound';


const Trailer = () => {

    const {pathname} = useLocation();
    
    const category = pathname.includes('movie') ? 'movie' : 'tv';

   const arr = useSelector(state => state[category].info.videos);
   console.log(arr);
   

   const navigate = useNavigate();
   
   
  return (
    <div style={{background : 'rgba(0,0,0,0.9)'}} className='absolute w-full h-screen top-0 left-0 flex items-center justify-center z-50'>
        <Link onClick={()=>navigate(-1)}>
            <i class="absolute left-[80%] top-[10%] ri-close-large-fill"></i>
        </Link>
        
        {arr.length > 0 ? (
            <ReactPlayer controls={true} width={800} height={400} url={`https://www.youtube.com/watch?v=${arr[0].key}`} />
        ) : (
            <NotFound />
        )}
    </div>
  )
}

export default Trailer