
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Ruins from './ruins';
import Snowdin from './snowdin';
import Waterfall from './waterfall';
import Hotland from './hotland';
import Core from './core';
import NewHome from './newHome';
import Input from './searchInput.js'
import black from './solidBlack.jpeg'
import { keyboard } from '@testing-library/user-event/dist/keyboard';


const App = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();


  const hotland = () => {
    console.log("checking if background function is working")
  }
  const ruins = () => {
    console.log("checking if background function is working")
  }
  const snowdin = () => {
    console.log("checking if background function is working")
  }
  const waterfall = () => {
    console.log("checking if background function is working")
  }
  const core = () => {
    console.log("checking if background function is working")
  }
  const newHome = () => {
    console.log("checking if background function is working")
  }

  const pages = ['ruins', 'snowdin', 'waterfall', 'hotland', 'core', 'newHome']
  const [search, setSearch] = useState([])
  const lol = useRef();


  const toPages = () => {
    setSearch(pages.filter(word => word.startsWith(value)))
    navigate(`./${value}`)
  }

  return (
    <div className='container'>
      <header>
        <div id='title' onClick={() => navigate("./App")}>Undertale HUB</div>
        <Link to={'/ruins'} className='link-decoration' id='ruins' onClick={ruins} > Ruins</Link>
        <Link to={'/snowdin'} className='link-decoration' id='snowdin' onClick={snowdin} >Snowdin</Link>
        <Link to={'/waterfall'} className='link-decoration' id='waterfall' onClick={waterfall}>Waterfall</Link>
        <Link to={'hotland'} className='link-decoration' id='hotland' onClick={hotland} >Hotland</Link>
        <Link to={'/core'} className='link-decoration' id='core' onClick={core}>Core</Link>
        <Link to={'/newhome'} className='link-decoration' id='newHome' onClick={newHome} >NewHome</Link>
      </header>
      <Routes>
        <Route path='/ruins' element={<Ruins />} />
        <Route path='/snowdin' element={<Snowdin />} />
        <Route path='/waterfall' element={<Waterfall />} />
        <Route path='/hotland' element={<Hotland />} />
        <Route path='/core' element={<Core />} />
        <Route path='/newhome' element={<NewHome />} />
      </Routes>
      <div className='seniorContainer'>
        <div>
          <Input value={value} setValue={setValue} />
        </div>
        <BootsTrapButton onClick={toPages} id='searchButton' />

        {/* {search.map((page) => <div style={{ color: 'white' }}>{page}</div>)} */}
      </div>
      3

    </div >

  );

}


const BootsTrapButton = (test) => {
  return (
    <>

      {/* <Button onClick={test.onClick}>TRAVEL</Button>{''} */}
      <button id='travelButton' onClick={test.onClick} >Travel</button>

    </>
  )
}
export default App;



