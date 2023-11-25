import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
