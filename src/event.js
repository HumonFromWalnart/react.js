import logo from './logo.svg';
import './event.css';
import { useRef } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function App() {

    const lol = useRef();

    const FocusinTime = () => {
        const alertValue = document.getElementById("inputinTime")
        
        lol.current.focus();
        showAlert(alertValue);
    }

    function showAlert(lol) {
        if(lol.value == ''){
            alert("Nothing but here's text")
        }else{
        alert(lol.value);
        }
    }

    return (
        <div id='container'>
            <h2 className='signUp'>Sign Up</h2>
            <input id='inputinTime' type={'text'} ref={lol} placeholder='HOwdey' ></input>
            <button id='buttoninTime' type='submssit' onClick={FocusinTime}>FOCUS IT</button>
        </div>
    );





};
export default App;
