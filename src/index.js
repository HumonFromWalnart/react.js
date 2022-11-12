import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppSecond from './axiosTest.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from './context';
import { CardBOI } from './card';
import Waterfall from './waterfall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <AppSecond>
          <Routes>
            <Route path='/' element={<CardBOI />} />
            <Route path='/:id' element={<Waterfall />} />
          </Routes>
        </AppSecond>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

