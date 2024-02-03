import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home } from './pages/Home/index'
import React from 'react'
import { HomeImage } from './pages/HomeImage'
import { Login } from './pages/Login'
import { Characters } from './pages/Characters'
import { Movies } from './pages/Movies'
import { HQs } from './pages/HQs'

export function Router() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeImage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/characters" element={<Characters/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/hq" element={<HQs/>} />   
      </Routes>
    </AnimatePresence>
  )
}