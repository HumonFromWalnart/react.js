
// import jesus from './jesus-ballin.gif'
// import mettaton from './Mettaton_NEO.gif'
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Ruins from '../Undertale-Maps/ruins';
import Snowdin from '../Undertale-Maps/snowdin';
import Waterfall from '../Undertale-Maps/waterfall';
import Hotland from '../Undertale-Maps/hotland';
import Core from './core';
import NewHome from '../Undertale-Maps/newHome';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <header>
          <Link to={'/ruins'} className='link-decoration' id='ruins' >Ruins</Link>
          <Link to={'/snowdin'} className='link-decoration' id='snowdin' >Snowdin</Link>
          <Link to={'/waterfall'} className='link-decoration' id='waterfall' >Waterfall</Link>
          <Link to={'hotland'} className='link-decoration' id='hotland' >Hotland</Link>
          <Link to={'/core'} className='link-decoration' id='core' >Core</Link>
          <Link to={'/newhome'} className='link-decoration' id='newHome' >NewHome</Link>
          <Routes>
            <Route path='/ruins' element={<Ruins />} />
            <Route path='/snowdin' element={<Snowdin />} />
            <Route path='/waterfall' element={<Waterfall />} />
            <Route path='/hotland' element={<Hotland />} />
            <Route path='/core' element={<Core />} />
            <Route path='/newhome' element={<NewHome />} />
          </Routes>
        </header>
        <div className='seniorContainer'>
          <Input />
        </div>

      </div>

    </BrowserRouter>
  );
}

const Input = () => {
  return (
    <input id='searchInput' type={'text'} placeholder='Search' ></input>
  )
}

export default App;



