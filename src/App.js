
import './App.css';
import React, { useState, useRef } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Ruins from './ruins';
import Snowdin from './snowdin';
import Waterfall from './waterfall';
import Hotland from './hotland';
import Core from './core';
import NewHome from './newHome';
import Rickroll from './rickroll.js'
import black from './solidBlack.jpeg'
import coreBackground from './coreBackground.jpeg'
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import ricksWithGun from './rickWithGun.gif'
import BootsTrapButton from './searchButton';
import Input from './searchInput';
import Sus from './sus.js'
import { ChangeTheme } from './themeChangerButton';
import Theme from './context';
import { useContext } from 'react';
import { ThemeContext } from './context';
import { Lore1 } from './coreLoreComponent';

const App = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const gone = useRef();
  const pages = ['ruins', 'snowdin', 'waterfall', 'hotland', 'core', 'newHome']
  const [search, setSearch] = useState([])
  const { nig, switchinTime, becomeNig } = useContext(ThemeContext)


  const play = () => {
    document.body.style.backgroundImage = `url(${ricksWithGun})`
    gone.current.style.display = 'none'
  }

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


  const toPages = () => {
    if (value === undefined) {
      setValue('its empty boi')
    }
    setSearch(pages.filter(word => word.startsWith(value)))
    navigate(`./${value}`)
  }

  return (
    <Lore1>
      <div className={`container ${nig && 'dark'} `} ref={gone}>
        <header>
          <div id='title' onClick={() => navigate("./App")}>Undertale HUB</div>
          <ChangeTheme onClick={switchinTime} />
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
          <Route path='/rickroll' element={<Rickroll />} />
        </Routes>
        <div className='seniorContainer'>
          <div>
            <Input value={value} setValue={setValue} />
          </div>
          <BootsTrapButton onClick={toPages} id='searchButton' />
        </div>
        <Sus onClick={play} />
      </div >
    </Lore1>
  );


}

export default App;



