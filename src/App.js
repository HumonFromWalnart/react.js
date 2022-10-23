
// import jesus from './jesus-ballin.gif'
// import mettaton from './Mettaton_NEO.gif'
import './App.css';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import Ruins from './ruins';
import Snowdin from './snowdin';
import Waterfall from './waterfall';
import Hotland from './hotland';
import Core from './core';
import NewHome from './newHome';
import hotlandBackground from './hotland.png';
import ruinsBackground from './ruins.png'
import snowdinBackground from './snowdin.png'
import waterfallBackground from './waterfall.png'
import coreBackground from './core.jpg'
import newHomeBackground from './judgementHall.jpg'

const App = () => {

  const searchInput = useRef();

  const hotland = () => {
    document.body.style.backgroundImage = `url(${hotlandBackground})`
    console.log("checking if background function is working")
  }

  const ruins = () => {
    document.body.style.backgroundImage = `url(${ruinsBackground})`
    searchInput.current.style.display = 'none'
    console.log("checking if background function is working")
  }

  const snowdin = () => {
    document.body.style.backgroundImage = `url(${snowdinBackground})`
    console.log("checking if background function is working")
  }

  const waterfall = () => {
    document.body.style.backgroundImage = `url(${waterfallBackground})`
    console.log("checking if background function is working")
  }
  const core = () => {
    document.body.style.backgroundImage = `url(${coreBackground})`
    console.log("checking if background function is working")
  }

  const newHome = () => {
    document.body.style.backgroundImage = `url(${newHomeBackground})`
    console.log("checking if background function is working")
  }

  return (
    < BrowserRouter >
      <div className='container'>
        <header>
          <div id='title'>Undertale HUB</div>
          <Link to={'/ruins'} className='link-decoration' id='ruins' onClick={ruins} > Ruins</Link>
          <Link to={'/snowdin'} className='link-decoration' id='snowdin' onClick={snowdin} >Snowdin</Link>
          <Link to={'/waterfall'} className='link-decoration' id='waterfall' onClick={waterfall}>Waterfall</Link>
          <Link to={'hotland'} className='link-decoration' id='hotland' onClick={hotland} >Hotland</Link>
          <Link to={'/core'} className='link-decoration' id='core' onClick={core}>Core</Link>
          <Link to={'/newhome'} className='link-decoration' id='newHome' onClick={newHome} >NewHome</Link>
          <Routes>
            <Route path='/ruins' element={<Ruins />} />
            <Route path='/snowdin' element={<Snowdin />} />
            <Route path='/waterfall' element={<Waterfall />} />
            <Route path='/hotland' element={<Hotland />} />
            <Route path='/core' element={<Core />} />
            <Route path='/newhome' element={<NewHome />} />
          </Routes>
        </header>
        <div className='seniorContainer' ref={searchInput}>
          <Input />
        </div>

      </div>

    </BrowserRouter >
  );

}

const Input = () => {
  return (
    <input id='searchInput' type={'text'} placeholder='Search' ></input>
  )
}

export default App;



