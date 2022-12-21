import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import SecondPage from '../pages/SecondPage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<App/>} />
            <Route path='/secondPage'  element={<SecondPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router

