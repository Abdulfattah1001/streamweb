import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './page/login';
import Home from './page/home';
import Message from './page/message';
import Profile from './page/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/message' element={<Message />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  </Router>
);

reportWebVitals();