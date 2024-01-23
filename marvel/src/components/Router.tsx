import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { DefaultLayout } from '../layouts/DefaultLayout'
import React from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}