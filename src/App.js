import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Mypage from './components/mypage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
