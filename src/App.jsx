import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-600'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App