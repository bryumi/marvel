import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import React from 'react'
import { HomeImage } from './pages/HomeImage'
import { Login } from './pages/Login'

export function Router() {
  return (
    <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeImage />} />
        <Route path="/login" element={<Login/>} />
        
    </Routes>
  )
}