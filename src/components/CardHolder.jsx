import React from 'react'
import Card from './Card'

const CardHolder = ({data,movie,tv}) => {
    
    
  return (
    <>
        <div className='box w-full mt-4 min-h-[38.5vh]   pb-7 pl-4 overflow-x-auto overflow-y-hidden'>
            <h1 className='pl-8 text-slate-100 font-bold text-2xl '>Popular</h1>
            <div className='p-8 relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible '>
                {data.map((elem, idx) => <Card key={idx} info={data[idx]} />)}
            </div>

        </div>
        <div className='box w-full mt-4 min-h-[38.5vh]   pb-7 pl-4 overflow-x-auto overflow-y-hidden'>
            <h1 className='pl-8 text-slate-100 font-bold text-2xl '>Movies</h1>
            <div className='p-8 relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible '>
                {movie.map((elem, idx) => <Card key={idx} info={movie[idx]} />)}
            </div>

        </div>
        <div className='box w-full mt-4 min-h-[38.5vh]   pb-7 pl-4 overflow-x-auto overflow-y-hidden'>
            <h1 className='pl-8 text-slate-100 font-bold text-2xl '>Series</h1>
            <div className='p-8 relative w-full min-h-[42vh] flex gap-2 items-center justify-start overflow-visible '>
                {tv.map((elem, idx) => <Card key={idx} info={tv[idx]} />)}
            </div>

        </div>
    </>
  )
}

export default CardHolder