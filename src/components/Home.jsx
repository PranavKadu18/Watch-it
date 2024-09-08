import React from 'react'
import Sidenav from './Sidenav'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#1F1E24] flex'>
        <Sidenav />
        <div className='w-[77%] h-full'>
            <Nav />
        </div>
    </div>
  )
}

export default Home