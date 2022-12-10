import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import AppSecond from './axiosTest.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from './context';
import { CardBOI } from './card.js';
import Post1 from './post1';
import LowBudgetCode from './TF';
import { Flashbang } from './flashbang';
import { Krinja } from './umerOtKrinja';
import Overplayed from './overplayed';
import FirstElectricGuitar from './firstElectricGuitar';
import HitsOf90s from './90sHit';
import VoiceActors from './voiceActors';
import { Rickroll } from './rikcrollBoiii';
import TheEnd from './theEnd';
import { Wrong } from './wrong';
import { Audio } from './audio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <BrowserRouter>
      {/* <Theme>
        <AppSecond> */}
          <Routes>
            {/* <Route path='/' element={<CardBOI />} />
            <Route path='post/:id' element={<Post1 />} /> */}
                <Route path='/' element={<Audio />}/>
               {/* <Route path='/' element={<LowBudgetCode />}/>
               <Route path='/flashbang' element={<Flashbang />}/>
               <Route path='/:id' element={<Wrong />}/>
               <Route path='/umerOtKrinja' element={<Krinja/>}/>
               <Route path='/overplayed' element={<Overplayed/>}/>
               <Route path='/firstElectricGuitar' element={<FirstElectricGuitar/>}/>
               <Route path='/90sHit' element={<HitsOf90s/>}/>
               <Route path='/voiceActors' element={<VoiceActors/>}/>
               <Route path='/theEnd' element={<TheEnd/>}/>
               <Route path='/rickcroll' element={<Rickroll/>}/> */}
          </Routes>
        {/* </AppSecond>
      </Theme> * */}
   </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

