
import jesus from './jesus-ballin.gif'
import mettaton from './Mettaton_NEO_battle.gif'
import './App.css';
// import { createElement } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={jesus} className="App-logo" alt="logo" />
        <p>
          jesus <code>ballin</code>.
        </p>
        <a
          className="App-link"
          href="https://freerobux.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          100% Proven By Jesus Itself
        </a>
      </header>
      <div className='bigOne'>
        <div id='container'>
          <div id='Head'></div>
          <div className='inputinTime'>
            <div className='rowinTime'>
            <input id='input'></input>
            <button id="button" onClick={getValue}>Add</button>
            </div>
            <div id='new'></div>
            <img src={mettaton} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}


const getValue = () => {
  const inputValue2 = document.getElementById("input").value;
  add(inputValue2);
}
  document.addEventListener("keydown", (element) => {
    if (element.key == "Enter") {
        const inputValue = document.getElementById("input").value;
        add(inputValue);
    }
});

let counter = 0;

const add = (value) => {
  counter += 1;
  const newElement = document.createElement("div");
  newElement.innerHTML = `${counter}. ${value} `;
  newElement.style = "margin-top: 10px; height: 30px; font-size: 25px; border: 1px solid rgb(77, 30, 30); border-radius: 15px; display: flex; align-items: center; margin-bottom:30px"
  console.log(counter)
  document.getElementById('new').appendChild(newElement);
  document.getElementById('new').style.display = "block"
}
export default App;
