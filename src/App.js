import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Mypage from './components/mypage';

import { GoogleOAuthProvider } from '@react-oauth/google'
const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
