import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppSecond from './axiosTest.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from './context';
import { CardBOI } from './card.js';
import Post1 from './post1';
import LowBudgetCode from './questionSite/TF';
import { Flashbang } from './questionSite/flashbang';
import { Krinja } from './questionSite/umerOtKrinja';
import Overplayed from './questionSite/overplayed';
import FirstElectricGuitar from './questionSite/firstElectricGuitar';
import HitsOf90s from './questionSite/90sHit';
import VoiceActors from './questionSite/voiceActors';
import { Rickroll } from './questionSite/rikcrollBoiii';
import TheEnd from './questionSite/theEnd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <BrowserRouter>
      {/* <Theme>
        <AppSecond> */}
          <Routes>
            {/* <Route path='/' element={<CardBOI />} />
            <Route path='post/:id' element={<Post1 />} /> */}
               <Route path='/' element={<LowBudgetCode />}/>
               <Route path='/flashbang' element={<Flashbang />}/>
               <Route path='/umerOtKrinja' element={<Krinja/>}/>
               <Route path='/overplayed' element={<Overplayed/>}/>
               <Route path='/firstElectricGuitar' element={<FirstElectricGuitar/>}/>
               <Route path='/90sHit' element={<HitsOf90s/>}/>
               <Route path='/voiceActors' element={<VoiceActors/>}/>
               <Route path='/theEnd' element={<TheEnd/>}/>
               <Route path='/rickcroll' element={<Rickroll/>}/>
          </Routes>
        {/* </AppSecond>
      </Theme> * */}
   </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

