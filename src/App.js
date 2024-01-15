import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/home';
import Navbar from './components/navbar';
import Login from './components/login';
import Edit from './components/edit';
import Mypage from './components/mypage';
import Write from './components/write';
import Feed from './components/feed';

import { GoogleOAuthProvider } from '@react-oauth/google'
const GOOGLE_REST_API_KEY = '599604728211-k4rpa2hff5vv52l7d8hf0cqdjh5bf4fa.apps.googleusercontent.com'


function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={`${GOOGLE_REST_API_KEY}`}>

        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/feed" element={<Feed/>}/>
        </Routes>
      </GoogleOAuthProvider>

    </BrowserRouter>
  );
}

export default App;
