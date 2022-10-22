

// import jesus from './jesus-ballin.gif'
// import mettaton from './Mettaton_NEO.gif'
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { useRef } from 'react';
// import { useState } from 'react';
import Lol from './event';
import Home from './home';
// import { createElement } from 'react';


const App = () => {
    //   const [list, setList] = useState([]);
    //   const [inputValue, setInputValue] = useState('');
    //   const lol = useRef();
    // 2 type of data

    // 1. normal data
    // 2. DOM Element

    // const alertValue = document.getElementById("inputinTime") => DOM element

    // function FocusinTime ({inputValue, lol}){
    //  const search = inputValue.toLowerCase.filter((lol) => lol == inputValue);
    //  setInputValue(search);
    // }
    // if(lol.current == ''){
    //   console.log("nothing")
    // }else{
    //   console.log("lol")
    // }
    // }

    // function showAlert(lol) {
    //   if (lol.current.value == '') {
    //     alert("Nothing but here's text")
    //   } else {
    //     alert(lol.value);
    //   }
    // }

    // const arr = [1, 2, 3, 4];

    // console.log([arr]) => [[1, 2, 3, 4]]
    // [...arr] => [1, 2, 3, 4]

    return (
        <BrowserRouter>
            <div className="Container">
                <Link to={'/home'} id='link-decoration'>Home </Link>
                <Link to={'/event'} id='link-decoration' >Event</Link>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/event' element={<Lol />} />
                </Routes>
                <div className='container'>
                    <div>

                    </div>
                </div>
                {/* <header className="App-header">
        <img src={mettaton} className="App-logo" alt="logo" />
        <div id='your-box'>
          <p id='mettaton-status'>
            Mettaton Neo has 90ATK and 9DEF
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=axZ1r_duW0w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teleport To Battle
          </a></div>

      </header> 
      <div className='outlineContainer'>
        <div id='container'>
          <div className='toDoList'>
            <div className='searchField'>
              <input id='input' value={inputValue} placeholder='Add Something Useless' onChange={(e) => setInputValue(e.target.value)}></input>
              <Button id="button" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add It" />
            </div>
            <div id='new'>
              {list.map((doIt, index) => <Text value={doIt} index={index} list={list} setList={setList} />)} */}
                {/* {list.map((cur) => <div>{cur}</div>)} */}
                {/* </div> */}
                {/* <div id='container-second'> lol */}
                {/* <h2 className='signUp'>Sign Up</h2>
              <input id='inputinTime' type={'text'} ref={lol} placeholder='HOwdey' ></input>
              <button id='buttoninTime' type='submit' onClick={FocusinTime}>FOCUS IT</button>
            </div>
          </div>
        </div>
      </div> */}
            </div>
        </BrowserRouter>

    );
}

// function Text({ value, index, list, setList }) {
//   const deleteIT = () => {
//     const newList = list.filter((cur) => cur !== value);
//     setList(newList);
//   }

//   return (
//     <div id='task-container'>
//       <p>{`${index + 1} > ${value}`}</p>
//       <Negative onClick={deleteIT}></Negative>
//     </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button id="button" onClick={props.onClick} >Add</button>
//   );
// }

// const Negative = (negative) => {
//   return (
//     <button id="negative" onClick={negative.onClick} >Delete</button>
//   );
// }

export default App;



// const getValue = () => {
//   const inputValue2 = document.getElementById("input").value;
//   add(inputValue2);
// }
// document.addEventListener("keydown", (element) => {
//   if (element.key == "Enter") {
//     const inputValue = document.getElementById("input").value;
//     add(inputValue);
//   }
// });

// let counter = 0;

// const add = (value) => {
//   counter += 1;
//   const newElement = document.createElement("div");
//   newElement.innerHTML = `${counter}. ${value} `;
//   newElement.style = "margin-top: 10px; height: 30px; font-size: 25px; border: 1px solid rgb(77, 30, 30); border-radius: 15px; display: flex; align-items: center; margin-bottom:30px"
//   console.log(counter)
//   document.getElementById('new').appendChild(newElement);
//   document.getElementById('new').style.display = "block"
// }