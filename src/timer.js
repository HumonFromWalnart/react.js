
import './timer.css';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [value, setValue] = useState(0);
    const [change, setChange] = useState('no');
    const seconds = useRef(0);

    useEffect(() => {
        if (change === 'yes')
            setTimeout(() => {
                setValue(value + 1)
                if (value === 100) {
                    seconds.current.value += Number(value / 100);
                    setValue(0)
                }
            }, 10);
    }, [value, change]);

    const reset = () => {
        if (change === 'yes')
            console.log("erase da memory")
        else { console.log("nope") }
    }

    const Start = (begin) => {
        return (
            <button id='start' onClick={begin.onClick}>Start</button>
        );
    }

    const ResetIt = (stop) => {
        return (
            <button id='reset' onClick={stop.onClick}>Reset</button>
        );
    }

    return (

        <div className='container'>
            <input id='numberInput' value={value}></input>
            <input id='numberInput' ref={seconds}></input>
            <Start onClick={() => { setChange('yes') }} />
            <ResetIt onClick={reset} />
        </div >

    );
}

export default App;



