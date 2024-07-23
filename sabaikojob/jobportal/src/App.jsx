import React from 'react'
import Navbar from './component/Navbar'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
       <Route path='/' element = {<Home />} />
    </Routes>
    </>
  )
}

export default App