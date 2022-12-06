
import './timer.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
    const [millsecond, setMillsecond] = useState(0);
    const [second, setSecond] = useState(10);
    const [change, setChange] = useState('no');
    const navigate = useNavigate();


    useEffect(() => {
        // if (change === 'yes'){
        setTimeout(() => {
            setSecond(second - 1)
        }, 1000);
        if(second == 0){
            navigate('/flashbang')
         }

        // }
    }, [millsecond, second]);

    // const reset = () => {
    //     if (change === 'yes'){
    //     console.log('its runnnig stop it')
    //     }
    //     else { console.log("nope") }
    // }

    // const Start = (begin) => {
    //     return (
    //         <button id='start' onClick={begin.onClick}>Start</button>
    //     );
    // }

    // const ResetIt = (stop) => {
    //     return (
    //         <button id='reset' onClick={stop.onClick}>Reset</button>
    //     );
    // }

    return (

        <div className='container'>
            <input id='numberInput' value={second}></input>
            {/* <Start onClick={() => { setChange('yes') }} />
            <ResetIt onClick={reset} /> */}
        </div >

    );
}

export default Timer;



