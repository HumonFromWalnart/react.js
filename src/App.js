
// import jesus from './jesus-ballin.gif'
// import mettaton from './Mettaton_NEO.gif'
import './App.css';
import React, { useRef, useState } from 'react';
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
import black from './solidBlack.jpeg'
import { Button } from 'react-bootstrap';

const App = () => {

  const searchInput = useRef();
  const [value, setValue] = useState();

  const hotland = () => {
    document.body.style.backgroundImage = `url(${hotlandBackground})`
    console.log("checking if background function is working")
  }

  const ruins = () => {
    document.body.style.backgroundImage = `url(${black})`
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
    document.body.style.backgroundImage = `url(${black})`
    console.log("checking if background function is working")
  }

  const newHome = () => {
    document.body.style.backgroundImage = `url(${newHomeBackground})`
    console.log("checking if background function is working")
  }

  const pages = ['ruins', 'snowdin', 'waterfall', 'hotland', 'core', 'newHome']
  const [search, setSearch] = useState([])

  const toPages = () => {
    setSearch(pages.filter(word => word.startsWith(value)))


    // let arr = [1, 2, 3, 4, 5, 6];
    // let sondgoi = []
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] % 2 === 1) sondgoi.push(arr[i])
    // } 
    // let sondgoi = arr.filter(too => too % 2)
    // console.log(sondgoi)
    
  }

  const whereIsMySuperInput = () =>{
    searchInput.current.style.display = 'block'
searchInput.current.firstChild.value = 'lolol'
  }


  return (
    < BrowserRouter >
      <div className='container'>
        <header>
          <div id='title' onClick={whereIsMySuperInput}>Undertale HUB</div>
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
        {/* <div className='seniorContainer' ref={searchInput}>
          <div> <Input value={value} setValue={setValue} /></div>
          <BootsTrapTest onClick={toPages} />

          {search.map((page) => <div style={{ color: 'white' }}>{page}</div>)}
        </div> */}


      </div >

    </BrowserRouter >
  );

}

// const Input = ({ value, setValue }) => {
//   return (
//     <input value={value} id='searchInput' type={'text'} placeholder='Search' onChange={(e) => setValue(e.target.value)}/>
//   )
// }

// const BootsTrapTest = (test) => {
//   return (
//     <>

//       <Button variant="warning" onClick={test.onClick}>BOOTSTRAPTESTBOI</Button>{''}

//     </>
//   )
// }

export default App;



