import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import Trending from './components/Trending'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-600'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </div>
  )
}

export default App