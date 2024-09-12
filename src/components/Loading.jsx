import React from 'react'
import loader from '/Settings.gif'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-white'>
        <img  className='w-[5%] h-[10%]' src={loader} alt="" />
    </div>
  )
}

export default Loading