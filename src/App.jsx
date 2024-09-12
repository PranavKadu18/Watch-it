import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-600'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  )
}

export default App