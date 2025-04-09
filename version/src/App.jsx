import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/profile';
import Signup from './pages/signup';
import Signin from './pages/signin';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
         
      </Routes>
    </BrowserRouter>
  )
}
