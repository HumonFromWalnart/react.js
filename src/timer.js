
import './timer.css';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [value, setValue] = useState(0);
    const [change, setChange] = useState('no');


    useEffect(() => {
        if (change === 'yes')
            setTimeout(() => {
                setValue(value + 1)
                console.log(value)
                // if (value === 100) {
                    
                // }
            }, 10);
    }, [value, change]);

    // useEffect(() => {
    //     if (reset === 'erase')
    //         console.log('ok')
    // }, []);

    const Start = (begin) => {
        return (
            <button id='start' onClick={begin.onClick}>Start</button>
        );
    }

    // const Reset = (stop) => {
    //     return (
    //         <button id='reset' onClick={stop.onClick}>Reset</button>
    //     );
    // }
    return (

        <div className='container'>
            <input id='numberInput' value={value}></input>
            <input id='numberInput' ref={value}></input>
            <Start onClick={() => { setChange('yes') }} />
            {/* <Reset onClick={() => { setReset('erase') }} /> */}
        </div >

    );
}

export default App;



