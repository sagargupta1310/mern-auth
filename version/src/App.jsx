import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// Importing pages with correct file name capitalization
import Home from './pages/home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signup from './pages/signup';
import Signin from './pages/signin';

// Importing Header component
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
